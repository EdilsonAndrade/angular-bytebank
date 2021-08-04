import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  constructor() {
    this.listaTransferencia = [];
  }

  adicionarTransferencia(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  get getTransferencias() {
    return this.listaTransferencia;
  }

  private hidratar(transferencia: any) {
    transferencia.date = new Date();
  }
}
