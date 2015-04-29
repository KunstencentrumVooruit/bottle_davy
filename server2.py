#!/usr/bin/python

from bottle import route, run, template, request, static_file
import os.path, time
from lastModified import lastModified
import nowplaying
import libs.festfootage

def getTweet(number):
	with open('/home/lou/scripts/twitterwall/tweets.txt') as file:
		line = file.readlines()
		line = line[number]
		#return line
		data = line.split(';')
		return data[0] + '<BR/><BR/>\r\n\r\n' + data[1]

def getInstagram(number):
	with open('/home/lou/scripts/instagram/instagram.txt') as file:
		line = file.readlines()
		number=int(number)*2
		line1 = line[number]
		line2 = line[number+1]
		line1.strip(' \t\n\r')
		line2.strip(' \t\n\r')
		return "{\"caption\" : \"" + line1.strip(' \t\n\r') + "\", \"url\" : \"" + line2.strip(' \t\n\r') + "\"}"
		#return "{\"caption\" : \"test\", \"url\" : \"test2\"}"

def getSong():
	with open('/mnt/GT3/GT2 Projects/nowplaying.txt') as file:
		line = file.readlines()
		line = line[1]
		#return line
		data = line.split(';')
		return data[0]
def isDagklapperModified():
	return lm.isModified()

def get_dagklapperLastModificationTime():
	return lm.get_lastModificationTime()	

def getDagklapperData():
	with open('/mnt/GT3/GT2 Projects/dagklapper.csv') as file:
		line = file.readlines()
		return line

@route('/')
def hello():
    return "Hello nagios!"

@route('/twitterwall')
def greet():
    return template('twitterwall')

@route('/dagklapper')
def return_dagklapper():
    data = getDagklapperData()
    return template('dagklapper', data=data, modified=get_dagklapperLastModificationTime())

@route('/isDagklapperModified', method='GET')
def return_isDagklapperModified():
	return get_dagklapperLastModificationTime()

@route('/instagram/<id>', method='GET')
def _getInstagram(id):
	return getInstagram(id)

@route('/instagram', method='GET')
def _returnInstagram():
	return template('instagram')

@route('/festfootage', method='GET')
def _returnFestFootage():
	return template('festfootage')
@route('/festfootage/next', method='GET')
def _returnFestFootageNext():
	pic=libs.festfootage.getPic()
	pos = pic.find('__')
	caption = pic[0:pos]
	caption2="#"+caption.replace('_',' ')
	
	return "{\"caption\" : \"" + caption2 + "\", \"url\" : \"" + pic + "\"}"

@route('/tweet', method='POST')
def return_tweet():
	number = request.forms.get('number')
	return getTweet(int(number))

@route('/static/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='static')

def main():
	global lm
	global nowplaying
	#nowplaying = nowplaying.libs.lastfm.getNowplaying()
	lm = lastModified()
	run(host='0.0.0.0', port=8090, debug=True)

main()
