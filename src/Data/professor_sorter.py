import json

#open courseProfs json
with open('courseProfs.json') as f:
   courseProfs = json.load(f)

#open rate my professor json
with open('rmp.json') as f:
   rmp = json.load(f)

#convert rmp into new dictionary containing
#the professor name and their rating as the key
new_dict = {}
for i in range(len(rmp)):
   new_dict[rmp[i]["profname"]] = rmp[i]["overall_rating"]

#create an exist function 
#checks if the key exist in the dictionary
def exist(dict, key):
   try:
      dict[key]
      return True
   except:
      return False

#create a final dict to dump into the json
final_dict = {}
#loop through each key in course profs
for key in courseProfs:
   #create a list to store ratings
   num_list = []
   for i in range(len(courseProfs[key])):
      #if the professor exist in the rmp dict
      if(exist(new_dict,courseProfs[key][i])):
         #append their rating to num_list
         num_list.append(new_dict[courseProfs[key][i]])
      else:
         continue
   #sort num_list from highest rating to lowest rating
   num_list = sorted(num_list, reverse = True)
   #create a list to store sorted professors
   sorted_profs = []
   #loop through num list
   for k in range(len(num_list)):
      #loop through each professor
      for i in range(len(courseProfs[key])):
         #if that professor exist in rmp
         if(exist(new_dict,courseProfs[key][i])):
            #if num_list index is equal to the professors rating
            if(num_list[k] == new_dict[courseProfs[key][i]]):
               #check for duplicates... if not a duplicate
               if courseProfs[key][i] not in sorted_profs:
                  #add that professor to sorted professors
                  sorted_profs.append(courseProfs[key][i])
   #if sorted_profs isn't emtpy
   if(sorted_profs != []):
      #set the class code i.e "admn1030" to a list of professors for it in sorted order by rating
      final_dict[key] = sorted_profs
      
#dump into a json file
with open("sortedProfs.json", "w") as outfile:
     json.dump(final_dict, outfile,indent = 4)





