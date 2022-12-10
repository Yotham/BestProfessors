"Python file to sort professors"
import json

# open unsortedProfs json
with open('unsortedProfs.json', encoding="utf-8") as f:
    unsortedProfs = json.load(f)

# open rate my professor json
with open('rmp.json', encoding="utf-8") as f:
    rmp = json.load(f)

# convert rmp into new dictionary containing
# the professor name and their rating as the key
new_dict = {}
for rm in rmp:
    new_dict[rm["profname"]] = rm["overall_rating"]


# create an exist function
# checks if the key exist in the dictionary


def exist(dict_, key_):
    "check is a key exist in a dictionary"
    try:
        dict_key = dict_[key_]
        if dict_key:
            return True
    except KeyError:
        return False

    return False


# create a final dict to dump into the json
final_dict = {}
# loop through each key in course profs
for key in unsortedProfs:
    # create a list to store ratings
    num_list = []
    for i in range(len(unsortedProfs[key])):
        # if the professor exist in the rmp dict
        if exist(new_dict, unsortedProfs[key][i]):
            # append their rating to num_list
            num_list.append(new_dict[unsortedProfs[key][i]])
        else:
            continue
    # sort num_list from highest rating to lowest rating
    num_list = sorted(num_list, reverse=True)
    # create a list to store sorted professors
    sorted_profs = []
    # loop through num list
    for num in num_list:
        # loop through each professor
        for i in range(len(unsortedProfs[key])):
            # if that professor exist in rmp
            if exist(new_dict, unsortedProfs[key][i]):
                # if num_list index is equal to the professors rating
                if num == new_dict[unsortedProfs[key][i]]:
                    # check for duplicates... if not a duplicate
                    if unsortedProfs[key][i] not in sorted_profs:
                        # add that professor to sorted professors
                        sorted_profs.append(unsortedProfs[key][i])
    # if sorted_profs isn't emtpy
    if sorted_profs:
        # set the class code i.e "admn1030" to a list of professors for it in sorted order by rating
        final_dict[key] = sorted_profs

# dump into a json file
with open("courseProfs.json", "w", encoding="utf-8") as outfile:
    json.dump(final_dict, outfile, indent=4)
