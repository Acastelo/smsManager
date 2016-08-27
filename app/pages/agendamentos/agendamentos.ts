import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabEnviadas } from '../tabs/TabEnvio';
import { TabAgendadas } from '../tabs/TabAgenda';

@Component({
  templateUrl: 'build/pages/agendamentos/tabs.html' 
})

export class Agendamentos{

  private tabEnviadas: any;
  private tabAgendadas: any;

  constructor(public navCtrl: NavController) {
        this.tabEnviadas = TabEnviadas;
        this.tabAgendadas = TabAgendadas;
  }
}




