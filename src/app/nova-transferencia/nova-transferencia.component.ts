import { Router } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { ITransferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia', // selector é o nome que deverá ser usado na outra  pagina
  templateUrl: './nova-transferencia.component.html', // onde contém o arquivo html com o desenho
  styleUrls: ['./nova-transferencia.component.scss'] // onde contém o arquivo scss com os estilos
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: string;

  constructor(private service: TransferenciaService, private router: Router) {

  }
  transferir() {
    const transferencia: ITransferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(transferencia).subscribe((transferencia: ITransferencia) => {
      console.log(transferencia, 'transferencia adicionada');
      this.router.navigateByUrl('extrato');
    },
      (erro) => {
        console.log('ocorreu um erro ', JSON.stringify(erro));
      });
  }

}
