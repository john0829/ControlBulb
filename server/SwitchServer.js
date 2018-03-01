'use strict';

const SwitchManager = require('./SwitchManager.js');
const path = require('path');
const url = require('url');

module.exports = class SwitchServer{

	constructor(router){
		this.router = router;
		this.switchManager = new SwitchManager();
		this.SetApi();
	}

	SetApi(){
		var self = this;

		self.router.get('/on',function(req,res){
			console.log("on!");
			new SwitchManager().TurnOnBulb(req.user)
			res.end("It's On");
		});


		self.router.get('/off',function(req,res){
			console.log("off!");
			new SwitchManager().TurnOffBulb(req.user);
			res.end("It's Off");
		});


	}
}