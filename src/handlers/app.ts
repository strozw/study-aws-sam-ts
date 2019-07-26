import AWS from 'aws-sdk'
import axios from 'axios'
import { Handler } from 'aws-lambda'

const url = 'http://checkip.amazonaws.com/'
let response: any = { statusCode: 200, body: '' }

const handler: Handler = async (event, context) => {
  const options = {
    apiVersion: '2012-08-10',
    endpoint: 'http://192.168.1.67:8000'
  }

  const dynamodb = new AWS.DynamoDB.DocumentClient(options)

  await dynamodb.scan({ TableName: 'test_table' }, (error, data) => {
    response = {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }).promise()

  // try {
  //   const ret = await axios(url)

  //   response = {
  //     'statusCode': 200,
  //     'body': JSON.stringify({
  //       message: 'hello world',
  //       location: ret.data.trim()
  //     })
  //   }
  // } catch (err) {
  //   console.log(err)

  //   return err
  // }

  // response = {
  //   statusCode: 200,
  //   body: 'test'
  // }

  return response
}

exports.lambdaHandler = handler
