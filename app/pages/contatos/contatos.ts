import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Contacts } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/contatos/contatos.html'
})
export class Contatos {

  contacts: Array<{displayName: string,  icon: string}>;

  constructor(public navCtrl: NavController) {

	  this.contacts = [
	      // { displayName: 'Fulano', icon: 'img/girl_1.png'},
	      // { displayName: 'Cicrano', icon: 'img/girl_2.png'},
	      // { displayName: 'Beltrano', icon: 'img/girl_3.png'},
	      // { displayName: 'Don Vandin', icon: 'img/girl_1.png'},
	      // { displayName: 'Fulano', icon: 'img/girl_1.png'},
	      // { displayName: 'Cicrano', icon: 'img/girl_2.png'},
	      // { displayName: 'Beltrano', icon: 'img/girl_3.png'},
	      // { displayName: 'Don Vandin', icon: 'img/girl_1.png'},
	      //  { displayName: 'Fulano', icon: 'img/girl_1.png'},
	      // { displayName: 'Cicrano', icon: 'img/girl_2.png'},
	      // { displayName: 'Beltrano', icon: 'img/girl_3.png'},
	      // { displayName: 'Don Vandin', icon: 'img/girl_1.png'}
	    ];
	    var opts = {
	      hasPhoneNumber: true,
	      multiple: true,
	      fields:  [ 'displayName', 'name', 'phoneNumber' ],
	    };

      Contacts.find(opts.fields, opts).then((contacts) => {
      	   this.contacts = contacts;
      	   //alert(contacts[0].phoneNumber);
          alert(JSON.stringify(contacts[1]));
      });
  }

}
