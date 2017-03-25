var mqtt = require('mqtt');  
var url  = 'mqtt://localhost:1883';

var payload = {  
  deviceId : '8675309'
};

var client = mqtt.connect(url);

client.on('connect', function () {  
  client.publish('airasoul', JSON.stringify(payload), { qos: 1 }, function() {
    // close connection
    client.end();
    // exit process
    process.exit();
  });
});



