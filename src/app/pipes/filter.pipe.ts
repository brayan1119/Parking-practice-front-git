import { Pipe, PipeTransform } from '@angular/core';
import { ConsultaParqueados } from '../models/consulta-parqueados.modelo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(vehiculos: ConsultaParqueados[], placa: string, tipo: string): any {
    if (!placa && !tipo) {
      return vehiculos;
    }

    return vehiculos.filter(vehiculo => {

      const filtroPlaca = placa ? vehiculo.placa.toUpperCase().includes(placa.toUpperCase()) : true;
      const filtroTipo = tipo ? vehiculo.tipo.toUpperCase().includes(tipo.toUpperCase()) : true ;

      return filtroPlaca && filtroTipo;
    });
  }

}
