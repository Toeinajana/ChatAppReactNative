const mongo = require('mongodb').MongoClient;
const io = require('socket.io').listen(5000).sockets;

// connect to mongo
mongo.connect('mongodb://127.0.0.1:27017/appchat', function(err, db){
    if(err){
        throw err;
    }

    console.log('Mongo connected');

    // connect socket
    io.on('connection', function(){
        let chat = db.collection('chats');

        //create function to sent status
        sendStatus = function(s){
            socket.emit('status', s);
        }

        // get chat from mongo -- limit 100 chat

        chat.find().limit(100).sort({_id:1}).toArray(function(err, res){

            if(err){
                throw err;
            }

            //emit messages
            socket.emit('output', res);
        });

        //handle input events
        socket.on('input', function(data){
            let name = data.name;
            let message = data.message;

            // chaeck name and message

            if(name == '' || message == ''){
                
                sendStatus('Please enter sth');
            }
            else {

                //insert message
                chat.insert({name: name, message: message}, function(){
                    io.emit('output', [data]);

                    // send status obj

                    sendStatus({
                        message: 'Message has sent',
                        clear: true
                    });
                });
            }
        });

    // handle clrs
    socket.on('clear', function(data){
        //remove all chat
        chat.remove({}, function(){
            // emit cls and let the user know
            socket.emit('all cleared');
        });
    });

    });


});