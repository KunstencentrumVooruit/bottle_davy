<HTML>
<HEAD>
  <title>Dagklapper</title>
  <link rel='stylesheet' type='text/css' href="/static/dagklapper/css/dagklapper.css" />
  <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <script type="text/javascript" src="/static/dagklapper/js/ajaxticker.js"></script>
  <script type="text/javascript" src="/static/dagklapper/js/update.js"></script>
</HEAD>

<HEAD>

<BODY>
<DIV id='ticker'>
<DIV class='center'>
<CENTER>
<script type="text/javascript">
var lastModified='{{modified}}'
var xmlfile="/static/nowplaying/nowplaying" //path to ticker txt file on your server.

//ajax_ticker(xmlfile, divId, divClass, delay, optionalfadeornot)
new ajax_ticker(xmlfile, "ajaxticker1", "someclass", [3500, 7000], "fade")
</script>
</center>
</DIV>
</DIV>

<DIV id='datum'>
<TABLE WIDTH='900' CLASS='datum'>
<TR><TD ALIGN=CENTER>
% datum = data[1].split(';')
{{datum [5]}}
</TD></TR>
</TABLE>
</DIV>

<DIV id='container1Links' class='container'>
<DIV class='center'>
% if len(data) > 2:
% data1 = data[2].split(';')
% locatie = data1[0].split('{NL}')
{{locatie[0]}}
<BR>
{{locatie[1]}}

</DIV>
</DIV>
<DIV id='container1Rechts' class='container'>
<DIV class='center'>
% activiteit1 = data1[2]
{{activiteit1}}
% end
</DIV>
</DIV>
<DIV id='container2Links' class='container'>
<DIV class='center'>
% if len(data) > 3:
% data1 = data[3].split(';')
% locatie = data1[0].split('{NL}')
{{locatie[0]}}
<BR>
{{locatie[1]}}

</DIV>
</DIV>
<DIV id='container2Rechts' class='container'>
<DIV class='center'>
% activiteit1 = data1[2]
{{activiteit1}}
% end
</DIV>
</DIV>

<DIV id='container3Links' class='container'>
<DIV class='center'>
% if len(data) > 4:
% data1 = data[4].split(';')
% locatie = data1[0].split('{NL}')
{{locatie[0]}}
<BR>
{{locatie[1]}}

</DIV>
</DIV>
<DIV id='container3Rechts' class='container'>
<DIV class='center'>
% activiteit1 = data1[2]
{{activiteit1}}
% end
</DIV>
</DIV>

<DIV id='container4Links' class='container'>
<DIV class='center'>
% if len(data) > 5:
% data1 = data[5].split(';')
% locatie = data1[0].split('{NL}')
{{locatie[0]}}
<BR>
{{locatie[1]}}

</DIV>
</DIV>
<DIV id='container4Rechts' class='container'>
<DIV class='center'>
% activiteit1 = data1[2]
{{activiteit1}}
% end
</DIV>
</DIV>

<DIV id='container5Links' class='container'>
<DIV class='center'>
% if len(data) > 6:
% data1 = data[6].split(';')
% locatie = data1[0].split('{NL}')
{{locatie[0]}}
<BR>
{{locatie[1]}}

</DIV>
</DIV>
<DIV id='container5Rechts' class='container'>
<DIV class='center'>
% activiteit1 = data1[2]
{{activiteit1}}
% end
</DIV>
</DIV>

<DIV id='container6Links' class='container'>
<DIV class='center'>
% if len(data) > 7:
% data1 = data[7].split(';')
% locatie = data1[0].split('{NL}')
{{locatie[0]}}
<BR>
{{locatie[1]}}

</DIV>
</DIV>
<DIV id='container6Rechts' class='container'>
<DIV class='center'>
% activiteit1 = data1[2]
{{activiteit1}}
% end
</DIV>
</DIV>

<SCRIPT>

//setTimeout(function(){window.location.reload();},2000);
   		$(document).ready(function(){loop()});
   		
   
</SCRIPT>

</BODY>
</HTML>
