import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoVehiculo } from '../../models/tipo-vehiculo.modelo';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  constructor(private http: HttpClient) { }

  obtenerTiposVehiculos(): Observable<TipoVehiculo[]> {
    return this.http.get<TipoVehiculo[]>('http://localhost:8080/api/tipo-vehiculo/obtener-tipos');
  }
}
