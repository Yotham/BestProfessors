"compile the quacs data into more usable data for our project"
import json
#create a dictionary to dump into json
overall_dict = {}
#open course.json --> quacs file
with open('courses.json', encoding = "utf-8") as data_file:    
    data = json.load(data_file)
    #loop through the file, multiple dictionaries requires lots of loops
    for i in range(len(data)):
        course = ""
        code = str(data[i]['code'])
        #loop through courses
        for j in range(len(data[i]["courses"])):
            #set to prevent duplicates
            instructors = set()
            number= str(data[i]['courses'][j]["crse"])
            course = code+number
            #loop through sections
            for k in range(len(data[i]['courses'][j]['sections'])):
                #loop through timeslots
                for o in range(len(data[i]['courses'][j]['sections'][k]['timeslots'])):
                    #loop through instructors
                    instructor = str(data[i]['courses'][j]['sections'][k]['timeslots'][o]['instructor'])
                    #if the instructor exist
                    if(data[i]['courses'][j]['sections'][k]['timeslots'][o]['instructor'] != "TBA"):
                        #multiple instructors seperated by "," parse for each one
                        if(instructor.find(",") != -1):
                            #parse
                            instructor = instructor[0:instructor.find(",")]
                            #add instructor
                            instructors.add(instructor)
                        #if instructor isn't blank add them i.e only 1 instructor or last instructor in list
                        elif (instructor != ""):
                            instructors.add(instructor)
            #if instructors set is filled
            if(instructors):
                #convert instructors into a list
                instructors = list(instructors)
                #add instructors to the course i.e "admn1030" = list of instructors
                overall_dict[course] = instructors

#dump into a json
with open("courseProfs.json", "w", encoding = "utf-8") as outfile:
    json.dump(overall_dict, outfile,indent = 4)