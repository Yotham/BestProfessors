import boto3

def create_course_prof_table(dynamodb=None):
    if not dynamodb:
        # for testing use region_name="us-west-2"
        # for production use region_name="us-west-1"
        dynamodb = boto3.resource("dynamodb", region_name="us-west-2")

    table = dynamodb.create_table(
        TableName="course_prof",
        KeySchema=[
            {"AttributeName": "subject", "KeyType": "HASH"},  # Partition key
            {"AttributeName": "number", "KeyType": "RANGE"},  # Sort key
        ],
        AttributeDefinitions=[
            {"AttributeName": "subject", "AttributeType": "S"},
            {"AttributeName": "number", "AttributeType": "N"},
        ],
        ProvisionedThroughput={"ReadCapacityUnits": 10, "WriteCapacityUnits": 10},
    )
    return table


if __name__ == "__main__":
    course_prof_table = create_course_prof_table()
    print("Table status:", course_prof_table.table_status)
