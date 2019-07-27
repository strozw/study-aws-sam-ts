import AWS from 'aws-sdk'

const options: AWS.DynamoDB.Types.ClientConfiguration = {
  apiVersion: '2012-08-10'
}

if (process.env.NODE_ENV === 'development') {
  options.endpoint = 'http://dynamodb-local:8000'
}

const dynamodb = new AWS.DynamoDB.DocumentClient(options)

export default dynamodb
