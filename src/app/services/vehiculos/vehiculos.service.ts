import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaParqueados } from '../../models/consulta-parqueados.modelo';
import { EntradaVehiculo } from '../../models/entrada-vehiculo.modelo';
import { SalirVehiculo } from '../../models/salir-vehiculo.modelo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient) { }

  obtenerVehiculosParqueados(): Observable<ConsultaParqueados[]> {
    return this.http.get<ConsultaParqueados[]>('http://localhost:8080/api/vehiculo/consultar-vehiculos-parqueados');
  }

  registrarIngreso(registrarEntradaDTO: EntradaVehiculo): Observable<null> {
    return this.http.post<null>('http://localhost:8080/api/ingresar', registrarEntradaDTO);
  }

  registrarSalida(registrarEntradaDTO: EntradaVehiculo): Observable<SalirVehiculo> {
    return this.http.post<SalirVehiculo>('http://localhost:8080/api/salir', registrarEntradaDTO);
  }
}
