const express = require("express");
const mongoose = require('mongoose');
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io').listen(server);
const port = 5000;
var db;


// let Users = require('./user.model');


//create model
const userSchema = new mongoose.Schema({
    name: String,
    chat: String,
    date: { type: Date, default: Date.now() },
});

const User = mongoose.model('user', userSchema);
//connect to mongo
mongoose.connect('mongodb://127.0.0.1:27017/appchat',function (err, db) {

    db = mongoose.connection;

    if (err) {
        throw err;
    }
    
    console.log('Mongo connected');
  });

  app.get('/chat_app', function(req, res){
     User.find({}, function(err,users){

        if(err){
            console.log(err);
        }
        else{
            res.json(users); // from database
        }

      });
  });

    /// socket connection
    io.on("connection", socket => {

        console.log("a user connected to socket.io");

        //listen to message

        socket.on("chat message", mgs => {

            //display message

            console.log("server", mgs);

            user = new User({name: mgs.name, chat: mgs.chat})
            user.save(()=>{
                console.log('saved')
            })
        
            io.emit("chat message", user);

        });

    });




  server.listen(port, () => {console.log("server running on port : " + port)});


    