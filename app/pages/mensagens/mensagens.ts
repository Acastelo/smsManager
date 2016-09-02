import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/mensagens/mensagens.html'
})

export class Mensagem {
  public database: SQLite;
  // public men: Array<Object>;

  public objMensagem:{
    mensagem: string;
    dataAgendamento: Date;
  }
  public labelEnviar:String;

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
