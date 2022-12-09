"""
section.py
Class containing information pertaining to a section of a course.
"""
class Section:
    "create section object"
    def __init__(self, act, attribute, cap, credmax, credmin, crn, crse,
     rem, sec, subj, timeslots, title):
        self.act = act
        self.attribute = attribute
        self.cap = cap
        self.credmax = credmax
        self.credmin = credmin
        self.crn = crn
        self.crse = crse
        self.rem = rem
        self.sec = sec
        self.subj = subj
        self.timeslots = timeslots
        self.title = title

    def get_act(self):
        "return act"
        return self.act

    def get_attribute(self):
        "return section attribute"
        return self.attribute

    def get_cap(self):
        "return section seat cap"
        return self.cap

    def get_credmax(self):
        "return max credits"
        return self.credmax

    def get_credmin(self):
        "return min credits"
        return self.credmin

    def get_crn(self):
        "return crn"
        return self.crn

    def get_crse(self):
        "return course"
        return self.crse

    def get_rem(self):
        "return seats remaining"
        return self.rem

    def get_sec(self):
        "return section"
        return self.sec

    def get_subj(self):
        "return subject"
        return self.subj

    def get_timeslots(self):
        "return timeslots"
        return self.timeslots

    def get_title(self):
        "return course title"
        return self.title
