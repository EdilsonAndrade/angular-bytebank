import { Injectable } from '@angular/core';
import { ITransferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: ITransferencia[];
  constructor() {
    this.listaTransferencia = [];
  }

  adicionarTransferencia(transferencia: ITransferencia) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  get getTransferencias() {
    return this.listaTransferencia;
  }

  private hidratar(transferencia: ITransferencia) {
    transferencia.data = new Date();
  }
}
