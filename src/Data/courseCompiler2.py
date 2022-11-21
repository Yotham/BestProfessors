import json

with open('courseProfs.json') as f:
   courseProfs = json.load(f)

with open('rmp.json') as f:
   rmp = json.load(f)

new_dict = {}
for i in range(len(rmp)):
   new_dict[rmp[i]["profname"]] = rmp[i]["overall_rating"]


#print(new_dict)

def exist(dict, key):
   try:
      dict[key]
      return True
   except:
      return False

final_dict = {}


for key in courseProfs:
   num_list = []
   for i in range(len(courseProfs[key])):
      if(exist(new_dict,courseProfs[key][i])):
         num_list.append(new_dict[courseProfs[key][i]])
      else:
         final_dict[key] = courseProfs[key]
   num_list = sorted(num_list, reverse = True)
   sorted_profs = []
   for k in range(len(num_list)):
      for i in range(len(courseProfs[key])):
         if(exist(new_dict,courseProfs[key][i])):
            if(num_list[k] == new_dict[courseProfs[key][i]]):
               sorted_profs.append(courseProfs[key][i])
   if(sorted_profs != []):
      sorted_profs = set(sorted_profs)
      sorted_profs = list(sorted_profs)
      final_dict[key] = sorted_profs
      

with open("test.json", "w") as outfile:
     json.dump(final_dict, outfile,indent = 4)





