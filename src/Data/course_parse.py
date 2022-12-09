from decimal import Decimal
import json
import os

if __name__ == "__main__":

    with open("courseProfs.json", encoding = "utf-8") as json_file:
        course_list = json.load(json_file, parse_float=Decimal)
        IT = 0
        for subject in course_list:
            del subject["fields"]["idb_metric"]

            IT += 1
            if IT == 1:
                break
        # os.remove(filename)
        # with open(filename, "w") as f:
        #     json.dump(data, f, indent=4)
