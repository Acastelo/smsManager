import { SQLite } from 'ionic-native';

let db = new SQLite();
db.openDatabase({
  name: 'smsManager.db',
  location: 'default' // the location field is required
}).then(() => {
  db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {

  }, (err) => {
    console.error('Unable to execute sql: ', err);
  });
}, (err) => {
  console.error('Unable to open database: ', err);
});
