import AWS from 'aws-sdk'
import axios from 'axios'
import { Handler } from 'aws-lambda'
import dynamodb from 'src/config/dynamodb'

const url = 'http://checkip.amazonaws.com/'
let response: any = { statusCode: 200, body: '' }

const handler: Handler = async (event, context) => {
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
