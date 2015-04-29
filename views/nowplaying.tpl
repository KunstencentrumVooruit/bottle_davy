<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
<link rel='stylesheet' type='text/css' href="/static/nowplaying/css/nowplaying.css" />
  <meta content="text/html;charset=UTF-8" http-equiv="Content-Type"/>
  <!--<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>-->
  <title>Nowplaying</title>
  
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.1/backbone-min.js"></script>
  
    
  <!-- ========= -->
  <!--    CSS    -->
  <!-- ========= -->
  
</head>
<body>
<div class="nowplaying">
<div class="nowplaying_header"><p class='center'>Now Playing</p></div>
<div class="nowplaying_body"></div>
</div>
<script id="nowplayingTemplate" type="text/template">
	       <p class='center'><%= nowplaying %></p>
</script>

<div class="rewind_header"><p class='left' class='circle'><<< REWIND</p><p class='right'>REWIND >>></p></div>
<div class="rewind_body"></div>

<script id="rewindTemplate" type="text/template">
      <p class='center'><%= nowplaying %></p>  
</script>
   <!--   <a href="#" class="bbm-button" id='render'>render</a> -->
  
      
  <script src="/static/nowplaying/js/model.js" type="text/javascript"></script> 
  <script src="/static/nowplaying/js/view.js" type="text/javascript"></script> 


</body>
</html>

 