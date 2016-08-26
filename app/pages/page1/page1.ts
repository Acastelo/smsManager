import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})

export class Page1 {
  labelEnviar:String;
  constructor(public navCtrl: NavController) {
    this.labelEnviar= "Enviar";
  }
}
