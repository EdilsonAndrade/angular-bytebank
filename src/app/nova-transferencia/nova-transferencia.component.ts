import { Component, Output, EventEmitter } from '@angular/core';
import { ITransferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia', // selector é o nome que deverá ser usado na outra  pagina
  templateUrl: './nova-transferencia.component.html', // onde contém o arquivo html com o desenho
  styleUrls: ['./nova-transferencia.component.scss'] // onde contém o arquivo scss com os estilos
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<ITransferencia>();

  valor: number;
  destino: string;

  transferir() {
    const transferencia: ITransferencia = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(transferencia);
  }

}
