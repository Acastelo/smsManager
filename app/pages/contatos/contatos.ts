import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Contacts } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/contatos/contatos.html'
})
export class Contatos {

  contacts: Contacts[];
  contactsToShow: Contacts[];

  constructor(public navCtrl: NavController) {

	  this.contacts = [];
	  this.contactsToShow = [];

	    var opts = {
	      hasPhoneNumber: true,
	      multiple: true,
	      fields:  [ 'displayName', 'name', 'phoneNumber' ],
	    };

      Contacts.find(opts.fields, opts).then((contacts) => {
      	   this.contacts = contacts;
      	   this.initializeList();
      	   //alert(contacts[0].phoneNumber);
          //alert(JSON.stringify(contacts[1]));
      });
  }


  initializeList(){
  	this.contactsToShow = this.contacts;
  }

  onInput(ev: any){

  	let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
    	this.contactsToShow = this.contactsToShow.filter((item) => {
        return (item['displayName'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
   
}