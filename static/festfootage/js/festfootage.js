function showTicker()	{

	setTimeout(function(){getTweet(0);},0);
	
	setTimeout(function(){getTweet(1);},15000);
	
	setTimeout(function(){getTweet(2);},30000);
	

}

function loop()	{

	//showTicker();
	getTweet(0);
	setInterval(function(){getTweet(0);},15000);	

}
function fade()	{

	$("#caption").show();	
	$("#caption").fadeOut(5000);

}

function getTweet(number)	{

		url = "http://192.168.2.41:8080/festfootage/next";
		$.getJSON(url, function(data){

		$("#caption").fadeOut(3000);	
			// Set the variables from the results array
    		var caption = data.caption;
    		var url = data.url;
		url = "static/festfootage/images/"+url;
    		//console.log('Caption : ', caption);
    		var caption_html = "<p>" + caption + "</p>";
        	$("#caption").html(caption_html);
        	image_html="<img src= " + url + " id='image'>";
        	$("#pic").html(image_html);
    		
		});
		setTimeout(function(){fade();},2000);
			
		

}
