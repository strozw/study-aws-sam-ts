import AWS from 'aws-sdk'
import axios from 'axios'
import { Handler } from 'aws-lambda'
import dynamodb from 'src/connections/dynamodb'

const url = 'http://checkip.amazonaws.com/'
let response: any = { statusCode: 200, body: '' }

const handler: Handler = async (event, context) => {
  const result = await dynamodb.scan({ TableName: 'test_table' }).promise()

  response = {
    statusCode: 200,
    body: JSON.stringify(result)
  }

  return response
}

exports.lambdaHandler = handler
