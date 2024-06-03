Default infomation
default admin account: email: thaole@gmail.com password: helloworld

Installation
Install composer in global scope(check their doc) if possible
Import web-programming.sql to your own mysql database
Change .env file's content to your own database credentials
Go to main folder && cd php && composer install && php -S localhost:8000
Import postman_collection.json to your postman
Create an account in users by register endpoint and change its role to admin in database
Sending request to localhost:8000 using postman or your frontend
