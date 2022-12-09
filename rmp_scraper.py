"RateMyProfessor website scraper"
from asyncio.windows_events import NULL
import json
import math
from bs4 import BeautifulSoup
import requests
# professor object


class Professor:
    "create a professsor object"
    def __init__(self, fname, mname, lname, fullname, overall_rating_, reviews_):
        self.fname = fname
        self.mname = mname
        self.lname = lname
        self.fullname = fullname
        self.overall_rating = overall_rating_
        self.reviews = reviews_

    def get_first_name(self):
        "return the first name of a professor"
        return self.fname

    def get_middle_name(self):
        "return the middle name of a professor"
        return self.mname

    def get_last_name(self):
        "return the last name of a professor"
        return self.lname

    def get_full_name(self):
        "return the full name of a professor"
        return self.fullname

    def get_overall_rating(self):
        "return the overall rating of a professor"
        return overall_rating

    def get_reviews(self):
        "return the reviews of a professor"
        return self.reviews


class Review:
    "create a review object"
    def __init__(self, classname, reviewemotion, qualityrating, review_):
        self.classname = classname
        self.reviewemotion = reviewemotion
        self.qualityrating = qualityrating
        self.review = review_

    def get_class_name(self):
        "return the classname"
        return self.classname

    def get_review_emotion(self):
        "return the review emotion"
        return self.reviewemotion

    def get_quality_rating(self):
        "return the quality rating"
        return self.qualityrating

    def get_review(self):
        "return the whole review"
        return self.review


def generate_professor_list():
    "generate a list of all professors from a school"
    page = requests.get(
        "http://www.ratemyprofessors.com/filter/professor/?&page="
        +"1&filter=teacherlastname_sort_s+asc&query=*%3A*"
        + "&queryoption=TEACHER&queryBy=schoolId&sid=795", timeout=30)  # get request for page
    temp_jsonpage = json.loads(page.content)
    num_of_prof = (temp_jsonpage["searchResultsTotal"])

    professor_list_ = []
    # find the number of pages
    num_of_pages = math.ceil(num_of_prof / 20)
    i = 1
    # loop through each page
    while i <= num_of_pages:
        page = requests.get(
            "http://www.ratemyprofessors.com/filter/professor/?&page="
            + str(i) + "&filter=teacherlastname_sort_s+asc&query=*%3A*"
            + "&queryoption=TEACHER&queryBy=schoolId&sid=795", timeout=30)
        # load page content
        temp_jsonpage = json.loads(page.content)
        # add each professor to a list
        temp_list = temp_jsonpage["professors"]
        professor_list_.extend(temp_list)
        i += 1
    # return list of professors
    return professor_list_


professor_list = generate_professor_list()

def get_professor(professor_list_, fname, mname, lname):
    "get a professor object"
    fname_check = False
    mname_check = False
    lname_check = False
    reset = True
    for profe in enumerate(professor_list_):
        # Check if first name = rate my prof first name
        if fname == profe["tFname"]:
            fname_check = True
        # check if middle name = rate my prof middle name or is NULL
        if mname == NULL or mname == profe["tMiddlename"]:
            mname_check = True
        # check if last name = rate my prof last name
        if lname == prof["tLname"]:
            lname_check = True
        # if all names match then set reset to false
        if fname_check is True:
            if mname_check is True:
                if lname_check is True:
                    reset = False
        # if reset is true then the name didn't match reset
        # all checks back to false
        if reset:
            fname_check = False
            mname_check = False
            lname_check = False
        # if reset is false
        # return the professor from professor list
        else:
            # get professor
            return profe
    return None


def access_review_page(professor_input):
    "get review page"
    professor_ratings = []
    # professors  page id
    tid = str(professor_input["tid"])
    # request professors page
    req = requests.get("https://www.ratemyprofessors.com/professor?tid="+tid,timeout = 30)
    requests.get("https://www.ratemyprofessors.com/graphql",timeout=30)
    response = req.text
    # generate all html code of website
    soup = BeautifulSoup(response, "html.parser")
    # look for specific html class
    classnames = soup.find_all(
        'div', {'class': 'RatingHeader__StyledClass-sc-1dlkqw1-2'})
    reviewemotion = soup.find_all(
        'div', {'class': 'EmotionLabel__StyledEmotionLabel-sc-1u525uj-0'})
    qualityrating = soup.find_all(
        'div', {'class': 'CardNumRating__CardNumRatingNumber-sc-17t4b9u-2'})
    reviews_ = soup.find_all(
        'div', {'class': 'Comments__StyledComments-dzzyvm-0'})
    # loop through all reviews on the page
    for i in range(len(reviews)):
        j = i*2
        if j <= len(classnames)-1:
            # add total review object to professor ratings
            review_ = Review(classnames[j].text, reviewemotion[j].text[1:len(
                reviewemotion)], qualityrating[j].text, reviews_[i].text)
            professor_ratings.append(review_)
        else:
            break
    return professor_ratings


list_of_profs = []
# fix overall_rating
for prof in enumerate(professor_list):
    # set professor attributes = to current professors attributes
    first_name = prof["tFname"]
    middle_name = prof["tMiddlename"]
    last_name = prof["tLname"]
    overall_rating = prof["overall_rating"]
    # create full name, either omit middle name or add it depending on the professor
    if middle_name != '':
        full_name = first_name + " " + middle_name + " " + last_name
    else:
        full_name = first_name + " " + last_name
    review_temp = access_review_page(prof)
    review_list = []
    # append the reviews a review dictionary for easy storing for json
    for review in review_temp:
        review_dict = {}
        review_dict["className"] = review.get_class_name()
        review_dict["reviewemotion"] = review.get_review_emotion()
        review_dict["qualityrating"] = review.get_quality_rating()
        review_dict["review"] = review.get_review()
        review_list.append(review_dict)
    # set reviews = to review list
    reviews = review_list
    # create a professor object
    professor = Professor(first_name, middle_name, last_name,
                          full_name, overall_rating, reviews)
    # append that professor to the list of the professors
    list_of_profs.append(professor)

# create a dictionary list for the json
dictionary_list = []
# add each professor into a dictionary for json output
for profs in list_of_profs:
    prof_dict = {}
    prof_dict["profname"] = profs.get_full_name()
    prof_dict["overall_rating"] = profs.get_overall_rating()
    prof_dict["reviews"] = profs.get_reviews()
    # append each dictionary into the list of dictionaries
    dictionary_list.append(prof_dict)

# dump the dictionary list into a json file
with open("test.json", "w", encoding = "utf-8") as outfile:
    json.dump(dictionary_list, outfile, indent=4)
