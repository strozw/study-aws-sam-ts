# Study AWS SAM with Typescript

## Requirements

https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

### on mac

* aws cli

  ```sh
  brew install awscli
  aws configure
  ```

* aws sam cli

  ```sh
  brew tap aws/tap
  brew install aws-sam-cli
  ```

## development

1. watch build typescript

  ```sh
  npm run watch
  ```

2. Start api in local

  ```sh
  npm run start
  ```

## deploy

1. build typescript

  ```sh
  npm run build
  ```

2. sam package build

  ```
  env SAM_S3_BUCKET=YOUR_BUCKET_NAME npm run sam:package
  ```

3. sam deploy

  * to staging
  ```
  npm run deploy:stg
  ```

  * to production
  ```
  npm run deploy:prod
  ```

## TODO

* [x] multi stage
* [ ] use dynamodb
