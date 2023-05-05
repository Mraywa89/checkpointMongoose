let mongoose = require('mongoose');
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'checkpoint_mongoose';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`,{
         useNewUrlParser: true, 
         useUnifiedTopology: true  //VERIFY IF THERE'S A DATABASE WITH THE SAME NAME OR NOT
                                   //AND AUTOMATICALLY CREATE A DATABASE IF NOT EXISTS
         })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()