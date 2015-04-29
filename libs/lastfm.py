#!/usr/bin/python

import secrets
import pylast

def getNowPlaying():
	network = pylast.LastFMNetwork(api_key = secrets.LASTFM_API_KEY, api_secret = secrets.LASTFM_API_SECRET, username = secrets.LASTFM_USERNAME, password_hash = secrets.LASTFM_PASSWORDHASH)
	user = network.get_user("vooruitcafe")
	np = user.get_now_playing()
	return "{\"nowplaying\" : \"" + str(np) + "\"}"

#print getNowPlaying()
#print user.get_now_playing()
#tracks =  user.get_recent_tracks(limit=6)
#print tracks[0][0]
#print tracks[1][0]
#print tracks[2][0]
#print tracks[3][0]
#print tracks[4][0]
