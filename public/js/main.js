$(document).ready(function(){
	TurnOnBulb();
});


function GetServerUrl(){
	return "http://127.0.0.1:3000";
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
		// alert("open!");
		UploadOnData();

	});

	$("#closeLight").click(function(){
		alert("open!");
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