function showTicker()	{

	setTimeout(function(){getTweet(1);},0);
	setTimeout(function(){getTweet(2);},10000);
	setTimeout(function(){getTweet(3);},20000);
	

}

function loop()	{

	showTicker();
	setInterval(function(){showTicker();},30000);	

}

function getTweet(number)	{

	$.post("/tweet",{  number:number  }, function(data,status){$("#user").html(data);  });

}
