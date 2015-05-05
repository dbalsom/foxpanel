
//var socket = io.connect('https://darkwing/foxpanel', { path: '/foxpanel/socket.io' });

  if (document.location.pathname) {
    
	var parts = document.location.pathname.split('/');
    var dir = parts.slice(0, parts.length - 1).join('/') + '/';
    var path = '/' + dir.substring(1) + 'socket.io';
	
	console.log( "socket.io connection with path: ", path );
    socket = io( "https://darkwing/", { path: path } );
  } 
  else {
    socket = io();
  }

	console.log( "Js..." );

  if (socket.connected) {
  	console.log( "Already connected" );
  }

  socket.on( 'my_connect', function( msg ) {
 
	console.log( "Successfully connected to socket.io..." + msg );

	socket.emit( 'hello', { msg: 'this is a hello from the client' });
  });

  socket.on( 'connect_error', function( msg ) { 
    console.log( "There was a connection error." );
  });

  socket.on( 'line', function( msg ) {

	console.log( "Got line_ready event." );
    $('#log1').append($('<li>').text( msg ));
  
  });

