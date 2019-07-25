# Study AWS SAM with Typescript

## development

1. build typescript

  * watch build

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
  env S3_BUCKET=YOUR_BUCKET_NAME npm run sam:package
  ```

3. sam deploy

  ```
  npm run sam:deploy
  ```
