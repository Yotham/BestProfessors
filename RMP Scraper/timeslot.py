"""
Timeslot.py
Class containing information pertaining to a timeslot within a section of a course.
"""


class Timeslot:
    "create timeslot object"

    def __init__(self, date_end, date_start, days, instructor, location, time_end, time_start):
        self.date_end = date_end
        self.date_start = date_start
        self.days = days
        self.instructor = instructor
        self.location = location
        self.time_end = time_end
        self.time_start = time_start

    def get_date_end(self):
        "return end date"
        return self.date_end

    def get_date_start(self):
        "return start date"
        return self.date_start

    def get_days(self):
        "return days i.e tuesday/thursday"
        return self.days

    def get_instructor(self):
        "return instructor"
        return self.instructor

    def get_location(self):
        "return class location"
        return self.location

    def get_time_end(self):
        "return class end time"
        return self.time_end

    def get_time_start(self):
        "return class start time"
        return self.time_start
