import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: ITransferencia[];
  private url = "http://localhost:3000/transferencias";

  constructor(private api: HttpClient) {
    this.listaTransferencia = [];
  }

  adicionarTransferencia(transferencia: ITransferencia) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  getTransferencias(): Observable<ITransferencia[]> {

    return this.api.get<ITransferencia[]>(this.url);
  }

  private hidratar(transferencia: ITransferencia) {
    transferencia.data = new Date();
  }
}
