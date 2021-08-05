import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private url = "http://localhost:3000/transferencias";

  constructor(private api: HttpClient) {
  }

  adicionar(transferencia: ITransferencia): Observable<ITransferencia> {
    this.hidratar(transferencia);

    return this.api.post<ITransferencia>(this.url, transferencia);
  }

  getTransferencias(): Observable<ITransferencia[]> {

    return this.api.get<ITransferencia[]>(this.url);
  }


  private hidratar(transferencia: ITransferencia) {
    transferencia.data = new Date();
  }
}
