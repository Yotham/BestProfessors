"""
Timeslot.py
Class containing information pertaining to a timeslot within a section of a course.
"""
class Timeslot:
    "create timeslot object"
    def __init__(self, dateEnd, dateStart, days, instructor, location, timeEnd, timeStart):
        self.dateEnd = dateEnd
        self.dateStart = dateStart
        self.days = days
        self.instructor = instructor
        self.location = location
        self.timeEnd = timeEnd
        self.timeStart = timeStart

    def get_date_end(self):
        return self.dateEnd

    def get_date_start(self):
        return self.dateStart

    def get_days(self):
        return self.days

    def get_instructor(self):
        return self.instructor

    def get_location(self):
        return self.location
        
    def get_time_end(self):
        return self.timeEnd

    def get_time_start(self):
        return self.timeStart
        