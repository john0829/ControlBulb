$(document).ready(function(){
	TurnOnBulb();
	SetNowTime();
	SetTimeSelect();
});


function GetServerUrl(){
	return "http://192.168.1.20";
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
		console.log("open!!!");
		UploadOnData();

	});

	$("#closeLight").click(function(){
		console.log("close!!!");
		UploadOffData();
	});
}

function UploadOnData(){
	var apiUrl = GetServerUrl() + "/switch/on";
	var callback = function(msg){
	}
	AjaxGet(apiUrl,callback);
}

function UploadOffData(){
	var apiUrl = GetServerUrl() + "/switch/off";
	var callback = function(msg){
	}
	AjaxGet(apiUrl,callback);
}

function SetTimeSelect(){
	for(i = 0 ; i < 24 ; i++)
		$("#hours").append("<option value = " + i + ">" + i + "</option>");
	for(i = 0 ; i < 60 ; i++)
		$("#minutes").append("<option value = " + i + ">" + i + "</option>");
	for(i = 0 ; i < 60 ; i++)
		$("#seconds").append("<option value = " + i + ">" + i + "</option>");
}

function SetNowTime(){
	var currentdate = new Date();
	$("#timeString").text(currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds());
}

function GetClockTimeFromUser(){
	CheckTime(0);
}

function CheckTime(time){
	var clockTimeList = [];
	clockTimeList.push($("#hours").val());
	clockTimeList.push($("#minutes").val());
	clockTimeList.push($("#seconds").val());

	time = time + 1;
	var currentdate = new Date(); 
	console.log($("#hours").val() + ":" + $("#minutes").val() + ":" + $("#seconds").val() + 
		"nowTime:" + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" +currentdate.getSeconds());
	timeId = setTimeout(function(){CheckTime(time)}, 200);

    if((currentdate.getHours() == clockTimeList[0]) && 
       (currentdate.getMinutes() == clockTimeList[1]) &&
       (currentdate.getSeconds() == clockTimeList[2])){
		clearTimeout(timeId);
		UploadOnData();
	}
}

