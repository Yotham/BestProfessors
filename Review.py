# Review.py
# Class containing information pertaining to a review on a professor.

class Review:
    def __init__(self, professorName, className, reviewEmotion, qualityRating, review):
        self.professorName = professorName
        self.className = className
        self.reviewEmotion = reviewEmotion
        self.qualityRating = qualityRating
        self.review = review

    def get_professor_name(self):
        return self.professorName

    def get_class_name(self):
        return self.className

    def get_review_emotion(self):
        return self.reviewEmotion

    def get_quality_rating(self):
        return self.qualityRating

    def get_review(self):
        return self.review
