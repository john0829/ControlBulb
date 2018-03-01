'use strict';

module.exports = class SwitchManager{

	constructor(){
		var PythonShell = require('python-shell');
	}

	TurnOnBulb(attribute,callback){
		console.log("open lite!");
		var options = {
		    mode: 'json',
		    pythonOptions: ['-u'],
		    scriptPath: './',
		};
		var test = new PythonShell('TurnOn.py', options);
		test.end();

	}

	TurnOffBulb(attribute,callback){
		console.log("close lite!");
		var options = {
		    mode: 'json',
		    pythonOptions: ['-u'],
		    scriptPath: './',
		};
		var test = new PythonShell('TurnOff.py', options);
		test.end();

	}
}