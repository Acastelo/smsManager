import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite } from 'ionic-native';

import { Database } from '../../util/database';

@Component({
  templateUrl: 'build/pages/mensagens/mensagens.html'
})

export class Mensagem {
<<<<<<< HEAD
  public database: SQLite;
  // public men: Array<Object>;
=======
  labelEnviar:String;
  dataAtual= new Date().toISOString();
  banco = new Database();

  mensagemData = {
    mensagem: '',
    dataAgendamento: Date
  };
>>>>>>> a02c3f8751d00e8fe262907c8237f4222b36338a

  public objMensagem:{
    mensagem: string;
    dataAgendamento: Date;
  }
<<<<<<< HEAD
  public labelEnviar:String;
=======

  salvar(mensagemData){
    let sql = 'INSERT INTO tb_mensagem(mensagem, dataAgend) values (?,?)';

    this.banco.adicionar(sql, [mensagemData.mensagem, mensagemData.dataAgendamento])
  }
>>>>>>> a02c3f8751d00e8fe262907c8237f4222b36338a

  constructor(public navCtrl: NavController) {
    this.labelEnviar= "Enviar";
    this.database = new SQLite();

    this.database.openDatabase({name: "smsManager.db", location:"default"}).then(() =>{
      // this.atualizar();
      console.log("Banco aberto")
    }, (error) =>{
      console.log("ERROR...", error);
    });
  }

  public salvar() {
     this.database.executeSql("INSERT INTO mensagens (mensagem, data) VALUES ('objMensagem.mensagem',"
        + "'objMensagem.dataEnvio')", []).then((data) => {
         console.log("INSERTED: " + JSON.stringify(data));
     }, (error) => {
         console.log("ERROR: " + JSON.stringify(error.err));
     });
 }

 // public atualizar() {
 //     this.database.executeSql("SELECT * FROM mensagens", []).then((data) => {
 //         this.men = [];
 //         if(data.rows.length > 0) {
 //             for(var i = 0; i < data.rows.length; i++) {
 //                 this.men.push({mensagem: data.rows.item(i).mensagem, dataEnvio: data.rows.item(i).dataEnvio});
 //             }
 //         }
 //     }, (error) => {
 //         console.log("ERROR: " + JSON.stringify(error));
 //     });
 // }
 
  mudarBotao(){
    return this.labelEnviar="Agendar"
  }
}
