#!/usr/bin/python

import os, random

directory='/home/lou/bottle/static/festfootage/images'

def getPic():
	return random.choice(os.listdir(directory))


#for dirname, dirnames, filenames in os.walk(directory):
    # print path to all subdirectories first.
#    for subdirname in dirnames:
#        print os.path.join(subdirname)

    # print path to all filenames.
#    for filename in filenames:
#        print os.path.join(filename)

