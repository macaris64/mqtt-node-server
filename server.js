var mosca = require('mosca');

var settings = {
    port: 1883, // mqtt default port number
    http: {
        port: 3000,
    }
};

var server = new mosca.Server(settings);

// when a cliend connected the mqtt server, run
server.on('clientConnected', (client) => {
    console.log('a client connected', client.id);
});

server.on('clientDisconnected', (client) => {
    console.log('a client disconnected', client.id)
});

// fired when a message is received
server.on('published', (packet, client) => {
    console.log('Published', packet.payload.toString());
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
    console.log('Mosca server is up and running');
}

// etc.
// topic -> chat rooms