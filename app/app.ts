import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { Contatos } from './pages/contatos/contatos';
import { Agendamentos } from './pages/agendamentos/agendamentos';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Contatos;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Nova Mensagem', component: Page1, icon: 'text' },
      { title: 'Contatos', component: Contatos, icon: 'contacts'  },
      { title: 'Agendamentos', component: Agendamentos, icon: 'calendar'  },
      { title: 'Sobre', component: Page1, icon: 'information-circle'  }
    ];

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
