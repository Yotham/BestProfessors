from decimal import Decimal
import json
import os

if __name__ == "__main__":

    with open("courseProfs.json") as json_file:
        course_list = json.load(json_file, parse_float=Decimal)

        it = 0
        for subject in course_list:
            del subject["fields"]["idb_metric"]

            it += 1
            if it == 1:
                break

        # os.remove(filename)
        # with open(filename, "w") as f:
        #     json.dump(data, f, indent=4)
