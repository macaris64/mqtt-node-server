var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect', () => {
    console.log('a client has been connected');

    client.subscribe('new-user',(err) => {
        if(!err) {
            client.publish('new-user', 'Mehmet');
        }
        else {
            console.log(err.message);
        }
    });

    client.subscribe('led', (err) => {
        if(!err) {
            client.publish('new-user', 'Mehmet');
        }
        else {
            console.log(err.message);
        }
    })
});

client.on('message', (topic, message) => {
    console.log(topic, ' : ', message.toString())
});