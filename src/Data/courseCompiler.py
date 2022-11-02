import json

course = "csci1100"
overall_list = []
with open('courses.json') as data_file:    
    data = json.load(data_file)
    for i in range(len(data)):
        course = ""
        code = str(data[i]['code'])
        for j in range(len(data[i]["courses"])):
            instructors = set()
            number= str(data[i]['courses'][j]["crse"])
            course = code+number
            individual_dict = {}
            for k in range(len(data[i]['courses'][j]['sections'])):
                for o in range(len(data[i]['courses'][j]['sections'][k]['timeslots'])):
                    instructor = str(data[i]['courses'][j]['sections'][k]['timeslots'][o]['instructor'])
                    if(data[i]['courses'][j]['sections'][k]['timeslots'][o]['instructor'] != "TBA"):
                        if(instructor.find(",") != -1):
                            instructor = instructor[0:instructor.find(",")]
                            instructors.add(instructor)
                        elif (instructor != ""):
                            instructors.add(instructor)
            if(instructors):
                instructors = list(instructors)
                individual_dict["course"] = course
                individual_dict["list"] = instructors
                overall_list.append(individual_dict)
            

print(overall_list)
with open("courseProfs.json", "w") as outfile:
    json.dump(overall_list, outfile,indent = 4)