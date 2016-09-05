import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Database } from '../../util/database';

@Component({
  templateUrl: 'build/pages/mensagens/mensagens.html'
})

export class Mensagem {
  labelEnviar:String;
  dataAtual= new Date().toISOString();
  banco = new Database();

  mensagemData = {
    mensagem: '',
    dataAgendamento: Date
  };

  mudarBotao(){
    return this.labelEnviar="Agendar"
  }

  salvar(mensagemData){
    let sql = 'INSERT INTO tb_mensagem(mensagem, dataAgend) values (?,?)';

    this.banco.adicionar(sql, [mensagemData.mensagem, mensagemData.dataAgendamento])
  }

  constructor(public navCtrl: NavController) {
    this.labelEnviar= "Enviar";
  }
}
