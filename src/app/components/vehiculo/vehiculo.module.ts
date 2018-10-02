import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';
import { ListaCobrosComponent } from './lista-cobros/lista-cobros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarEntradaComponent, ListaCobrosComponent, FilterPipe],
  exports: [RegistrarEntradaComponent, ListaCobrosComponent]
})
export class VehiculoModule { }
