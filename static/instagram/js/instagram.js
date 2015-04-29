function showTicker()	{

	setTimeout(function(){getTweet(0);},0);
	setTimeout(function(){getTweet(1);},15000);
	setTimeout(function(){getTweet(2);},30000);
	

}

function loop()	{

	showTicker();
	setInterval(function(){showTicker();},45000);	

}

function getTweet(number)	{

		url = "http://192.168.2.41:8080/instagram/"+number;
		$.getJSON(url, function(data){

			
			// Set the variables from the results array
    		var caption = data.caption;
    		var url = data.url;
    		//console.log('Caption : ', caption);
    		var caption_html = "<p>" + caption + "</p>";
        	$("#captions").html(caption_html);
        	image_html="<img src= " + url + " id='instagram_image'>";
        	$("#instagram").html(image_html);
    
		});

}