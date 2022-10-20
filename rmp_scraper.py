    
import requests
import json
import math

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

print(professor_list)