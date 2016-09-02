import { SQLite } from 'ionic-native';

export class SmsManagerDB{

  constructor(){
    let db = new SQLite();

    db.openDatabase({
      name: 'smsManager.db',
      location: 'default' // the location field is required
    }).then(() => {
      db.executeSql('CREATE TABLE IF NOT EXISTS mensagens'+
      '(id INTEGER NOT NULL AUTOINCREMENT PRIMARY KEY, mensagem VARCHAR(255), dataEnvio DATETIME)', {}).then((data) => {
        console.log("Tabela criada", data);
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });
  }
}
