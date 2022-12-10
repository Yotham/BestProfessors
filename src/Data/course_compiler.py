"compile the quacs data into more usable data for our project"
import json
# create a dictionary to dump into json
overall_dict = {}
# open course.json --> quacs file
with open('courses.json', encoding="utf-8") as data_file:
    data = json.load(data_file)
    # loop through the file, multiple dictionaries requires lots of loops
    for data_itr in data:
        COURSE = ""
        CODE = str(data_itr['code'])
        # loop through courses
        for j in range(len(data_itr["courses"])):
            # set to prevent duplicates
            instructors = set()
            NUMBER = str(data_itr['courses'][j]["crse"])
            COURSE = CODE + NUMBER
            # loop through sections
            for k in range(len(data_itr['courses'][j]['sections'])):
                # loop through timeslots
                for o in range(len(data_itr['courses'][j]['sections'][k]['timeslots'])):
                    # loop through instructors
                    INSTRUCTOR = str(
                        data_itr['courses'][j]['sections'][k]['timeslots'][o]['instructor'])
                    # if the instructor exist
                    if(data_itr['courses'][j]['sections'][k]['timeslots'][o]['instructor']
                       != "TBA"):
                        # multiple instructors seperated by "," parse for each one
                        if INSTRUCTOR.find(",") != -1:
                            # parse
                            INSTRUCTOR = INSTRUCTOR[0:INSTRUCTOR.find(",")]
                            # add instructor
                            instructors.add(INSTRUCTOR)
                        # if instructor isn't blank add them i.e only 1 instructor or
                        # last instructor in list
                        elif INSTRUCTOR != "":
                            instructors.add(INSTRUCTOR)
            # if instructors set is filled
            if instructors:
                # convert instructors into a list
                instructors = list(instructors)
                # add instructors to the course i.e "admn1030" = list of instructors
                overall_dict[COURSE] = instructors

# dump into a json
with open("unsortedProfs.json", "w", encoding="utf-8") as outfile:
    json.dump(overall_dict, outfile, indent=4)
