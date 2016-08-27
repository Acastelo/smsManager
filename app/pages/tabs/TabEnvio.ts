import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/tabs/tabEnviadas.html'
})
export class TabEnviadas {
  private  mensagensEnviadas : Array<{text: string, date: string}>;

  constructor(){
    this.mensagensEnviadas = [
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'}
    ];
  }
}