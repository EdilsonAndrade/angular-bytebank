import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  private _service: TransferenciaService;

  constructor(service: TransferenciaService) {
    this._service = service;
  }

  transferir($event) {
    this._service.adicionarTransferencia($event);

  }
}
