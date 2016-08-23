import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/contatos/contatos.html'
})
export class Contatos {

  contacts: Array<{name: string,  icon: string}>;

  constructor(public navCtrl: NavController) {

	  this.contacts = [
	      { name: 'Fulano', icon: 'img/girl_1.png'},
	      { name: 'Cicrano', icon: 'img/girl_2.png'},
	      { name: 'Beltrano', icon: 'img/girl_3.png'},
	      { name: 'Don Vandin', icon: 'img/girl_1.png'},
	      { name: 'Fulano', icon: 'img/girl_1.png'},
	      { name: 'Cicrano', icon: 'img/girl_2.png'},
	      { name: 'Beltrano', icon: 'img/girl_3.png'},
	      { name: 'Don Vandin', icon: 'img/girl_1.png'},
	       { name: 'Fulano', icon: 'img/girl_1.png'},
	      { name: 'Cicrano', icon: 'img/girl_2.png'},
	      { name: 'Beltrano', icon: 'img/girl_3.png'},
	      { name: 'Don Vandin', icon: 'img/girl_1.png'}
	    ];
  }
}
