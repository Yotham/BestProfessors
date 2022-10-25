import json
from msilib.schema import tables
from urllib import response
import boto3

# //////////////////////////////////////////////////////////////////////////////////////////
# Getting DynamoDB table
# //////////////////////////////////////////////////////////////////////////////////////////
access_key = "AKIAUH3ULRMEE22RVL3K"
secret_access_key = "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"
session = boto3.Session(aws_access_key_id=access_key, aws_secret_access_key=secret_access_key, region_name='us-east-1')
client_dynamo = session.resource('dynamodb')
table = client_dynamo.Table('courses')

# //////////////////////////////////////////////////////////////////////////////////////////
# retrieving the JSON from the test file
# //////////////////////////////////////////////////////////////////////////////////////////
file = open('test.json')
test_data = json.load(file)

# print(str(course_data['courses']))
for course in test_data['courses']:
    print(course['crse'])

# //////////////////////////////////////////////////////////////////////////////////////////
# REAL DATA RETRIEVAL AND INSERTION
# //////////////////////////////////////////////////////////////////////////////////////////
with open('courses.json') as json_file:
    courses_data = json.load(json_file)
    for courses in courses_data:
        course_code = courses['code']

        table.put_item(
            Item = {
                'course_code': course_code
            }
        )
        # for course_info in courses['courses']:
        #     print(course_info['crse'])