import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { VehiculosService } from '../../../services/vehiculos/vehiculos.service';
import { ConsultaParqueados } from '../../../models/consulta-parqueados.modelo';
import { EntradaVehiculo } from '../../../models/entrada-vehiculo.modelo';
import { Subscription } from 'rxjs';
import { ObservadorIngreso } from '../observador-ingreso';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from '../../modal/modal.component';
import { TipoVehiculoService } from '../../../services/tipo-vehiculo/tipo-vehiculo.service';
import { TipoVehiculo } from '../../../models/tipo-vehiculo.modelo';

@Component({
  selector: 'app-lista-cobros',
  templateUrl: './lista-cobros.component.html',
  styleUrls: ['./lista-cobros.component.css']
})
export class ListaCobrosComponent implements OnInit, OnDestroy {

  consultaParqueados: ConsultaParqueados[];
  registrarEntradaDTO: EntradaVehiculo;
  subscription: Subscription;
  placaIngresada: string;
  nombreTipo: string;
  mensajeExito = 'Operación realizada exitosamente';

  tiposVehiculo: TipoVehiculo[];

  constructor(private vehiculosService: VehiculosService,
    private tipoVehiculoService: TipoVehiculoService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private observadorIngreso: ObservadorIngreso) {
    this.subscription = this.observadorIngreso.missionAnnounced$.subscribe(
      mission => {
        this.ngOnInit();
    });
   }

  ngOnInit() {
    this.registrarEntradaDTO = new EntradaVehiculo();
    this.obtenerVehiculosParqueados();
    this.obtenerTiposVehiculos();
  }

  obtenerTiposVehiculos() {
    this.subscription = this.tipoVehiculoService.obtenerTiposVehiculos()
      .subscribe(data => this.tiposVehiculo = data,
      error => {
        this.tiposVehiculo = null;
        this.toastr.error(error.error.message);
      }
    );
  }

  obtenerVehiculosParqueados() {
    this.subscription = this.vehiculosService.obtenerVehiculosParqueados()
      .subscribe(data => this.consultaParqueados = data,
      error => {
        this.consultaParqueados = null;
        this.toastr.error(error.error.message);
      }
    );
  }

  registrarSalidaVehiculo(placa: string) {
    this.registrarEntradaDTO.placa = placa;
    this.subscription = this.vehiculosService.registrarSalida(this.registrarEntradaDTO)
      .subscribe(data => {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.salirVehiculo = data;
        this.obtenerVehiculosParqueados();
      },
      error => this.toastr.error(error.error.message));
  }

  limpiar() {
    this.nombreTipo = null;
    this.placaIngresada = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
