# Guadaltech: technical assessment

## Development server

Run `docker-compose up -d` for the MySQL container. It should load the SQL **dump file** from the project. Make sure the **used port** is available on your server, you can change it on the *.env* file.

For the server application, run `npm install` to install dependencies, then, run `node src/index.js` for testing.

## Trying out endpoints

A postman collection has been created to test every available endpoint easily. Import the collection file *guadaltech-api.postman_collection.json* to Postman. It has been exported using Collection version 2.1.