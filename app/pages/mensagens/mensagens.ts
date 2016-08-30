import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/mensagens/mensagens.html'
})

export class Mensagem {
  labelEnviar:String;

  mudarBotao(){
    return this.labelEnviar="Agendar"
  }
  constructor(public navCtrl: NavController) {
    this.labelEnviar= "Enviar";
  }
}
