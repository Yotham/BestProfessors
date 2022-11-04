# Professor.py
# Class containing information pertaining to a professor.

import Review

class Professor:
    def __init__(self, firstName, middleName, lastName, overallRating, reviews):
        self.firstName = firstName
        self.middleName = middleName
        self.lastName = lastName
        self.fullName = firstName + " " + middleName + " " + lastName
        self.overallRating = overallRating
        self.reviews = reviews

    def get_first_name(self):
        return self.firstName

    def get_middle_name(self):
        return self.middleName

    def get_last_name(self):
        return self.lastName

    def get_full_name(self):
        return self.fullName

    def get_overall_rating(self):
        return self.overallRating

    def get_reviews(self):
        return self.reviews
