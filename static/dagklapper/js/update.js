function loop()	{

	
	setTimeout(function(){isDagklapperModified();},60000);	

}
function check(modified)	{

	//alert(modified);
	//alert(lastModified);
	
	if (modified != lastModified)	{
		setTimeout(function(){window.location.reload();},2000);
	}
	else {
		setTimeout(function(){isDagklapperModified();},60000);
	}

}
function isDagklapperModified()	{

	$.get("/isDagklapperModified", function(data,status){
															check(data);
														});


}