$(document).ready(function(){
	TurnOnBulb();
});


function GetServerUrl(){
	return "http://192.168.1.20:3000";
}

function AjaxGet(apiUrl,callback){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: apiUrl,
			success: function(msg){
				callback(msg);
			},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}

function TurnOnBulb(){
	$("#openLight").click(function(){
		console.log("open!");
		UploadOnData();

	});

	$("#closeLight").click(function(){
		console.log("close!");
		UploadOffData();
	});
}

function UploadOnData(){
	var apiUrl = GetServerUrl() + "/switch/on";
	var callback = function(msg){
		var object = JSON.parse(msg);
		if(object.success)
		{
			console.log("success");
		}
	}
	AjaxGet(apiUrl,callback);
}

function UploadOffData(){
	var apiUrl = GetServerUrl() + "/switch/off";
	var callback = function(msg){
		var object = JSON.parse(msg);
		if(object.success)
		{
			console.log("success");
		}
	}
	AjaxGet(apiUrl,callback);
}