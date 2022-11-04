# Section.py
# Class containing information pertaining to a section of a course.

import Timeslot

class Section:
    def __init__(self, act, attribute, cap, credMax, credMin, crn, crse, rem, sec, subj, timeslots, title):
        self.act = act
        self.attribute = attribute
        self.cap = cap
        self.credMax = credMax
        self.credMin = credMin
        self.crn = crn
        self.crse = crse
        self.rem = rem
        self.sec = sec
        self.subj = subj
        self.timeslots = timeslots
        self.title = title

    def get_act(self):
        return self.act

    def get_attribute(self):
        return self.attribute

    def get_cap(self):
        return self.cap

    def get_credMax(self):
        return self.credMax

    def get_credMin(self):
        return self.credMin

    def get_crn(self):
        return self.crn
    
    def get_crse(self):
        return self.crse

    def get_rem(self):
        return self.rem

    def get_sec(self):
        return self.sec
    
    def get_subj(self):
        return self.subj

    def get_timeslots(self):
        return self.timeslots
    
    def get_title(self):
        return self.title
