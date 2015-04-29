from bottle import route, run, template, request, static_file
import libs.lastfm

@route('/nowplaying')
def nowplaying2():
	return template('nowplaying')

@route('/callLastFM')
def callLastFM():
        #response.content_type = 'application/json'
        global nowplaying
	nowplaying = libs.lastfm.getNowPlaying()
        return nowplaying

@route('/getNowplaying')
def getNowplaying():
	#response.content_type = 'application/json'
	#nowplaying = lastfm.getNowPlaying()
	global nowplaying 
	return nowplaying


