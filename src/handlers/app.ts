import axios from 'axios'
import { Handler } from 'aws-lambda'

const url = 'http://checkip.amazonaws.com/'
let response

const handler: Handler = async (event, context) => {
  response = {
    statusCode: 200,
    body: 'bbbbb'
  }

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

  return response
}

exports.lambdaHandler = handler
