    
from asyncio.windows_events import NULL
import requests
import json
import math
from urllib.parse import urlparse 
from bs4 import BeautifulSoup
from html.parser import HTMLParser

class Professor:
    def __init__(self, fname, mname, lname, fullname, overall_rating, reviews):
        self.fname = fname
        self.mname = mname
        self.lname = lname
        self.fullname = fullname
        self.overall_rating = overall_rating
        self.reviews = reviews
    def get_first_name(self):
        return self.fname
    def get_middle_name(self):
        return self.mname
    def get_last_name(self):
        return self.lname
    def get_full_name(self):
        return self.fullname
    def get_overall_rating(self):
        return overall_rating
    def get_reviews(self):
        return self.reviews

class Review:
    def __init__(self, className, reviewEmotion, qualityRating, review):
        self.className = className
        self.reviewEmotion = reviewEmotion
        self.qualityRating = qualityRating
        self.review = review
    def get_class_name(self):
        return self.className
    def get_review_emotion(self):
        return self.reviewEmotion
    def get_quality_rating(self):
        return self.qualityRating
    def get_review(self):
        return self.review




class htmlParser(HTMLParser):
    def handle_data(self, data):
        return self.data

def generate_professor_list():
    page = requests.get(
        "http://www.ratemyprofessors.com/filter/professor/?&page=1&filter=teacherlastname_sort_s+asc&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid=795"
    )  # get request for page
    temp_jsonpage = json.loads(page.content)
    num_of_prof = (temp_jsonpage["searchResultsTotal"])

    professor_list = []
    num_of_pages = math.ceil(num_of_prof / 20)
    i = 1
    while i <= num_of_pages:  # the loop insert all professor into list
        page = requests.get(
            "http://www.ratemyprofessors.com/filter/professor/?&page="
            + str(i) + "&filter=teacherlastname_sort_s+asc&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid=795"
        )
        temp_jsonpage = json.loads(page.content)
        temp_list = temp_jsonpage["professors"]
        professor_list.extend(temp_list)
        i += 1
    return professor_list

professor_list = generate_professor_list()

Fname = "Roger"
Mname = NULL
Lname = "Grice"
"""
WRITE CODE HERE

We need to write  a parser for the professor input i.e input = "Roger A Grice"

Parser(string) --> output tuple(Roger,A,Grice)

Fname = output[0]
Mname = output[1]
Lname = output[2]
"""

def get_professor(professor_list,Fname,Mname,Lname):
    Fname_check = False
    Mname_check = False
    Lname_check = False
    reset = True
    for i in range(len(professor_list)):
        #Check if first name = rate my prof first name
        if(Fname == professor_list[i]["tFname"]):
            Fname_check = True
        #check if middle name = rate my prof middle name or is NULL
        if(Mname == NULL or Mname == professor_list[i]["tMiddlename"]):
            Mname_check = True
        if(Lname == professor_list[i]["tLname"]):
            Lname_check = True
        if(Fname_check == True):
            if(Mname_check == True):
                if(Lname_check == True):
                    reset = False
        if(reset):
            Fname_check = False
            Mname_check = False
            Lname_check = False
        else:
            #get professor
            return professor_list[i]

def access_review_page(professor):
    professor_ratings = []
    tid = str(professor["tid"])
    #request professors page
    r = requests.get("https://www.ratemyprofessors.com/professor?tid="+tid)
    requests.get("https://www.ratemyprofessors.com/graphql")
    response = r.text
    #generate all html code of website
    soup = BeautifulSoup(response, "html.parser")
    #look for specific html class
    classNames = soup.find_all('div', {'class':'RatingHeader__StyledClass-sc-1dlkqw1-2'})
    reviewEmotion = soup.find_all('div',{'class':'EmotionLabel__StyledEmotionLabel-sc-1u525uj-0'})
    qualityRating = soup.find_all('div',{'class':'CardNumRating__CardNumRatingNumber-sc-17t4b9u-2'})
    reviews = soup.find_all('div',{'class':'Comments__StyledComments-dzzyvm-0'})
    for i in range(len(reviews)):
        j = i*2
        if(j <= len(classNames)-1):
            review = Review(classNames[j].text,reviewEmotion[j].text[1:len(reviewEmotion)],qualityRating[j].text,reviews[i].text)
            professor_ratings.append(review)
        else:
            break
    return professor_ratings


"""
need to make professor objects
"""


list_of_profs = []
#fix overall_rating 
for i in range(len(professor_list)):
    first_name = professor_list[i]["tFname"]
    middle_name = professor_list[i]["tMiddlename"]
    last_name = professor_list[i]["tLname"]
    overall_rating = professor_list[i]["overall_rating"]

    if(middle_name != ''):
        full_name = first_name + " " + middle_name + " " + last_name
    else:
        full_name = first_name + " " + last_name
    review_temp = access_review_page(professor_list[i])
    review_list = []
    for review in review_temp:
        review_dict = {}
        review_dict["className"] = review.get_class_name()
        review_dict["reviewEmotion"] = review.get_review_emotion()
        review_dict["qualityRating"] = review.get_quality_rating()
        review_dict["review"] = review.get_review()
        review_list.append(review_dict)
    reviews = review_list
    professor = Professor(first_name, middle_name, last_name, full_name, overall_rating, reviews)
    list_of_profs.append(professor)


dictionary_list = []
for profs in list_of_profs:
    prof_dict = {}
    prof_dict["profname"] = profs.get_full_name()
    prof_dict["overall_rating"] = profs.get_overall_rating()
    prof_dict["reviews"] = profs.get_reviews()
    dictionary_list.append(prof_dict)



with open("test.json", "w") as outfile:
    json.dump(dictionary_list, outfile,indent = 4)

