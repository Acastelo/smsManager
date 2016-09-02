import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Mensagem } from './pages/mensagens/mensagens';
import { Sobre } from './pages/sobre/sobre';
import { Contatos } from './pages/contatos/contatos';
import { Agendamentos } from './pages/agendamentos/agendamentos';
import { SmsManagerDB } from './util/database';



@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Sobre;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Nova Mensagem', component: Mensagem, icon: 'chatboxes' },
      { title: 'Contatos', component: Contatos, icon: 'contacts'  },
      { title: 'Agendamentos', component: Agendamentos, icon: 'calendar'  },
      { title: 'Sobre', component: Sobre, icon: 'information-circle'  },
  ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    console.log(page.component);
  }
}

ionicBootstrap(MyApp);
