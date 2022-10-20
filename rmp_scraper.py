import requests
import json
import math
page = requests.get(
        "http://www.ratemyprofessors.com/filter/professor/?&page=1&filter=teacherlastname_sort_s+asc&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid="
        + str(id))  # get request for page
temp_jsonpage = json.loads(page.content)
print(temp_jsonpage)