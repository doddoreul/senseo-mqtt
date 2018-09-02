const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://127.0.0.1');
var mainTopic = "/cuisine/senseo/";
var machineIsOn = false;

client.on('connect', () => {
  // Inform controllers that garage is connected
  client.publish(mainTopic + 'on', '')
  console.log('connectaiiiid');
});

client.on('message', (topic, message) => {
  console.log('message received', topic, message);

  if(topic === mainTopic + "on") {
	// turn machine on via gpio
	console.log("machine turned on")
	machineIsOn = true;
  }

  if (topic == mainTopic + "off"){
	// turn machine off via gpio
	console.log("machine turned off");
	machineIsOn = false;
  }

  if(topic == mainTopic + "BREW"){
	if (machineIsOn){
		console.log("making coffee");
	} else {
		console.log("machine is off");
	}
  }

  if (topic == mainTopic + "PROPFIND"){
  	// get metadata about the coffee (water state, for now)
  }

  if(topic == maintTopic + "WHEN"){
  	// stop pouring milk (not available on Senseo machines, but could be useful)
  }

})

public watchMachineStatus(){

}
