import { Component } from '@angular/core';

@Component({
  templateUrl: 'build/pages/tabs/tabsAgendadas.html'
})
export class TabAgendadas   {
  private mensagensAgendadas : Array<{text: string, date: string}>;

  constructor(){
    this.mensagensAgendadas = [
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'},
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'},
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'},
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'},
      {text:'Praesent sodales mauris eu elit.', date:'20-05-2016'}
    ];
  }
}
