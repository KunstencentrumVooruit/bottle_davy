import os.path, time

class lastModified:

	def get_lastModificationTime(self):
		
		file='/mnt/GT3/GT2 Projects/dagklapper.csv'
		return time.ctime(os.path.getmtime(file))
	
	def __init__(self):
		self.lastModified = self.get_lastModificationTime();

	def isModified(self):

		self.currentModifiedTime = self.get_lastModificationTime();
		if (self.currentModifiedTime == self.lastModified):
			return '0'
		else:
			self.lastModified = self.currentModifiedTime
			return '1'
