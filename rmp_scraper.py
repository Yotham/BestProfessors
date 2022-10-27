    
from asyncio.windows_events import NULL
import requests
import json
import math
from urllib.parse import urlparse 
from bs4 import BeautifulSoup
from html.parser import HTMLParser

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
        review = {}
        review["className"] = classNames[j].text
        review["reviewEmotion"] = reviewEmotion[j].text
        review["qualityRating"] = qualityRating[j].text
        review["review"] = reviews[i].text
        professor_ratings.append(review)
    return professor_ratings





"""
need to make professor objects
"""

professor = get_professor(professor_list,Fname,Mname,Lname)

profs = {}

first_name = professor["tFname"]
middle_name = professor["tMiddlename"]
last_name = professor["tLname"]

if(middle_name != ''):
    profs[first_name + " " + middle_name + " " + last_name] = access_review_page(professor)
else:
    profs[first_name + " " + last_name] = access_review_page(professor)


json_object = json.dumps(profs, indent = 4) 
print(json_object)