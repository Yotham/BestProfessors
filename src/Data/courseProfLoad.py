from decimal import Decimal
import json
import boto3


def load_course_prof(courses, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource("dynamodb", region_name="us-west-2")

    table = dynamodb.Table("course_prof")

    for course in courses:
        subject = course[0:4]
        number = int(course[4::])

        # get all the professors that teach a course
        profs = []
        for prof in courses[course]:
            profs.append(prof)

        print("Adding professors for course:", subject, number, profs)
        table.put_item(Item={"subject": subject, "number": number, "professors": profs})


if __name__ == "__main__":
    with open("courseProfs.json") as json_file:
        course_prof_list = json.load(json_file, parse_float=Decimal)
    load_course_prof(course_prof_list)
