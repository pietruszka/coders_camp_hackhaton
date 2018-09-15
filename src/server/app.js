const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

io.on('connection', function(socket){
  console.log('Client connected at '+231+' with socket ID: '+ socket.client.id);
  // io.emit('socketClientID', socket.client.id);


  socket.on('login2', function(user){
    console.log('log222ged!, ', user);
    socket.broadcast.emit('welcome', { user });
  });

  socket.on('user_kicked', function(user) {
    socket.broadcast.emit('user_kicked', { user });
  })

  socket.on('disconnect', function () {
    socket.emit('disconnected');
  });
});




http.listen(3005, function(){
  console.log('listening on *:3005');
});
