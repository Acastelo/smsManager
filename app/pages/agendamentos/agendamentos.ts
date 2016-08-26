import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ionicBootstrap } from 'ionic-angular';

@Component({
  template: `
    <ion-tabs>
    <ion-tab tabIcon="paper-plane" tabTitle="Enviadas" [root]="{{tabEnviadas}}"></ion-tab>
    <ion-tab tabIcon="time" tabTitle="Agendadas" [root]="{{tabAgendadas}}"></ion-tab>
  </ion-tabs>`
})

export class Agendamentos{

  private tabEnviadas: TabEnviadas;
  private tabAgendadas: TabAgendadas;

  constructor(public navCtrl: NavController) {
        this.tabEnviadas = new TabEnviadas(navCtrl);
        this.tabAgendadas = new TabAgendadas(navCtrl);
  }
}


@Component({
  templateUrl: 'build/pages/agendamentos/TabEnviadas.html'
})
export class TabEnviadas {
  private  mensagensEnviadas : Array<{text: string, date: string}>;

  constructor(public navCtrl: NavController){
    this.mensagensEnviadas = [
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
      {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'}
    ];
  }
}

@Component({
  templateUrl: 'build/pages/agendamentos/tabsAgendadas.html'
})
export class TabAgendadas   {
  private mensagensAgendadas : Array<{text: string, date: string}>;

  constructor(public navCtrl: NavController){
    this.mensagensAgendadas = [
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'},
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'},
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'},
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'},
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'}
    ];
  }
}
