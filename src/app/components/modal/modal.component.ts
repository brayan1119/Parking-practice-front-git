import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SalirVehiculo } from '../../models/salir-vehiculo.modelo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  @Input() salirVehiculo: SalirVehiculo;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
