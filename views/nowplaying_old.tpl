<HTML>
<HEAD>
	<title>Nowplaying</title>
	<link rel='stylesheet' type='text/css' href="/static/nowplaying/css/nowplaying.css" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<script type="text/javascript" src="/static/nowplaying/js/ajaxticker.js"></script>
</HEAD>

<BODY>

<DIV class='ticker'>
<CENTER>
<script type="text/javascript">

var xmlfile="/static/nowplaying/nowplaying" //path to ticker txt file on your server.

//ajax_ticker(xmlfile, divId, divClass, delay, optionalfadeornot)
new ajax_ticker(xmlfile, "ticker", "ticker", [3500, 7000], "fade")
</script>
</center>
</DIV>

</BODY>
</HTML>