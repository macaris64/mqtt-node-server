var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect', () => {
    console.log('a client has been connected');
});