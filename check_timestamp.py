#!/usr/bin/python

import os.path, time

file='/mnt/GT3/GT2 Projects/dagklapper.csv'
print "last modified: %s" % time.ctime(os.path.getmtime(file))
print "created: %s" % time.ctime(os.path.getctime(file))