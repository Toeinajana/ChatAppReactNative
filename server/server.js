const express = require("express");
const mongo = require('mongodb').MongoClient;
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io').listen(server);
const port = 5000;

// let Users = require('./user.model');

//connect to mongo
mongo.connect('mongodb://127.0.0.1:27017/appchat', function (err, db) {

   var db = db.db('appchat');

    if (err) {
        throw err;
    }
    console.log('Mongo connected');
  });

    /// socket connection
    io.on("connection", socket => {

       

        console.log("a user connected to socket.io");

        //listen to message

        socket.on("chat message", mgs => {

            //display message

            console.log(mgs);

            

            io.emit("chat message", mgs);
        });

    });


  server.listen(port, () => {console.log("server running on port : " + port)});


    