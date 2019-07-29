import AWS from 'aws-sdk'

const options: AWS.DynamoDB.Types.ClientConfiguration = {
  apiVersion: '2012-08-10',
  ...CONFIG.dynamodb
}

console.log(options)

const dynamodb = new AWS.DynamoDB.DocumentClient(options)

export default dynamodb
