import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Database } from '../../util/database';

@Component({
  templateUrl: 'build/pages/tabs/tabEnviadas.html'
})
export class TabEnviadas {
  private  mensagensEnviadas : Array<Object>;

  db = new Database();
  consultaTodos(){
    this.mensagensEnviadas = [];
    let sql = "SELECT * FROM tb_mensagem";
    let retorno: any = this.db.pesquisarTodos(sql);

    if(retorno.rows.length > 0) {
      for(var i = 0; i < retorno.rows.length; i++) {
        this.mensagensEnviadas.push({mensagem: retorno.rows.item(i).mensagem, dataAgend: retorno.rows.item(i).mensagens.dataAgend});
      }
    }
  }

  constructor(){
    // this.mensagensEnviadas = [
    //   {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
    //   {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
    //   {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
    //   {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'},
    //   {text:'Lorem ipsum dolor sit amet', date:'20-05-2016'}
    // ];
  }
}
