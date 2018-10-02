import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntradaVehiculo } from '../../../models/entrada-vehiculo.modelo';
import { VehiculosService } from '../../../services/vehiculos/vehiculos.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ObservadorIngreso } from '../observador-ingreso';
import { TipoVehiculoService } from '../../../services/tipo-vehiculo/tipo-vehiculo.service';
import { TipoVehiculo } from '../../../models/tipo-vehiculo.modelo';

@Component({
  selector: 'app-registrar-entrada',
  templateUrl: './registrar-entrada.component.html',
  styleUrls: ['./registrar-entrada.component.css']
})
export class RegistrarEntradaComponent implements OnInit, OnDestroy {

  registrarEntradaDTO: EntradaVehiculo;
  subscription: Subscription;
  mensajeExito = 'Operación realizada exitosamente';

  tiposVehiculo: TipoVehiculo[];

  constructor(private vehiculosService: VehiculosService,
              private tipoVehiculoService: TipoVehiculoService,
              private toastr: ToastrService,
              private observadorIngreso: ObservadorIngreso) {
    this.registrarEntradaDTO = new EntradaVehiculo();
   }

  ngOnInit() {
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

  registrarEntrada() {
    this.subscription = this.vehiculosService.registrarIngreso(this.registrarEntradaDTO)
      .subscribe(data => {
        this.toastr.success(this.mensajeExito);
        this.observadorIngreso.announceMission();
      },
      error => this.toastr.error(error.error.message));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
