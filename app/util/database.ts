import { SQLite } from 'ionic-native';

export class Database {
  db = new SQLite();

  constructor(){
    this.db.openDatabase({
      name: 'smsManager.db',
      location: 'default' // the location field is required
    }).then(() => {
      this.db.executeSql('CREATE TABLE tb_mensagem(id INTEGER PRIMARY KEY AUTOINCREMENT,' +
      ' mensagem TEXT, dataAgend TEXT)', {}).then((retorno) => {
        console.log("Tabela Criada: ", retorno);
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });
  }

  adicionar(sql: string, params: Array<Object>[]){
    this.db.executeSql(sql, params).then((retorno)=>{
      console.log("Dados inseridos ", + JSON.stringify(retorno));
    }, (error) =>{
      console.log("Erro " + JSON.stringify(error.err));
    });
  }

  pesquisarTodos(sql:string){
    this.db.executeSql(sql, []).then((retorno) => {
      console.log("Pesquisa realizada ", + JSON.stringify(retorno));
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }
}
