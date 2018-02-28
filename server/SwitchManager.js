'use strict';

module.exports = class SwitchManager{

	constructor(){
	}

	TurnOnBulb(attribute,callback){
		console.log("open lite!");
		var PythonShell = require('python-shell');
		var options = {
		    mode: 'json',
		    pythonOptions: ['-u'],
		    scriptPath: './',
		};
		var test = new PythonShell('TurnOn.py', options);
		test.on('message',function (message) {
		    console.log(message);
		});

	}
}