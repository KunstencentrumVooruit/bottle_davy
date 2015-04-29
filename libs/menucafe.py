#!/usr/bin/python
import json
import gspread
import datetime
from oauth2client.client import SignedJwtAssertionCredentials
cellnumber_offset = 1 #formule: weekdagnummer * 3  - 3 (indien middag -> eten vorige dag), +15 indien ma mid (-> eten ) + offset 1 = juiste cel (vlees)

def getCellNumberFromTimeAndDate():
	offset=0
	weekdag = datetime.datetime.today().isoweekday()	
	uur = datetime.datetime.time(datetime.datetime.now())
	if uur <= datetime.time(14,00):
		
		print "Lunchtime!"
		if weekdag != 1:
			offset-=3
		else:
			offset+=15
	else:
		print "Dinertime!"
	return datetime.datetime.today().isoweekday()*3 + offset

def getMenu():
	json_key = json.load(open('/home/lou/bottle/libs/API_Project-49416146b827.json'))
	scope = ['https://spreadsheets.google.com/feeds']
	credentials = SignedJwtAssertionCredentials(json_key['client_email'], json_key['private_key'], scope)
	gc = gspread.authorize(credentials)
	wks = gc.open('menucafe')
	worksheet = wks.sheet1
	cellnumber = getCellNumberFromTimeAndDate() + cellnumber_offset
	
	menu=[]
	vlees = worksheet.acell('B'+str(cellnumber)).value
	veggie = worksheet.acell('B'+str(cellnumber+1)).value
	#print cellnumber
	#print "Vandaag op het vleesmenu: " + vlees
	#print "Vandaag op het veggiemenu: " + veggie
	menu.append(vlees)
	menu.append(veggie)
	return menu
	#print "Vandaag op het vleesmenu: " + vlees
	#print "Vandaag op het veggiemenu: " + veggie
