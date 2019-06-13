const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema ({


    name: {

        type: String
   
    },
     message: {

        type: String


     },
     userId: {

        type: Number
     }






});

module.exports = mongoose.model('user', Users); 