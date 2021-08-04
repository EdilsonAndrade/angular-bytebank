import { TransferenciaService } from '../services/transferencia.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];
  _service: TransferenciaService;
  constructor(service: TransferenciaService) {
    this._service = service;
  }
  ngOnInit(): void {
    this.transferencias = this._service.getTransferencias;
  }


}
