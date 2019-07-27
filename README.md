# Study AWS SAM with Typescript

## Requirements

* aws cli
* aws sam cli

https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

### Instrations for mac

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

0. create docker network

  ```sh
  docker network create lambda-local
  ```

1. dockr-compose up

  ```sh
  docker-compose up
  ```

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
