import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ionicBootstrap } from 'ionic-angular';

@Component({
  template: `
    <ion-tabs>
    <ion-tab tabIcon="paper-plane" tabTitle="Enviadas" [root]="tabEnviadas"></ion-tab>
    <ion-tab tabIcon="time" tabTitle="Agendadas" [root]="tabAgendadas"></ion-tab>
  </ion-tabs>`
})

export class Agendamentos{

  tabEnviadas: TabEnviadas;
  tabAgendadas:TabAgendadas;
  constructor(public navCtrl: NavController) {
        this.tabEnviadas = TabEnviadas;
        this.tabAgendadas = TabAgendadas;
  }
}


@Component({
  templateUrl: 'build/pages/agendamentos/TabEnviadas.html'
})
export class TabEnviadas {}

@Component({
  templateUrl: 'build/pages/agendamentos/tabsAgendadas.html'
})
export class TabAgendadas {}
