# Getting Started with this App

npm install react-router-dom 

npm install cross-env --dev 

npm install node-sass

npm install styled-components 

npm install redux react-redux --save 

npm install axios

# Getting Started with server

npm install express

npm install http-proxy-middleware --save

npm install cors --save

npm install npm-run-all

npm install dotenv

npm install mysql2

npm install morgan

npm install nodemon

npm install --save body-parser

npm install express-fileupload

npm install jsonwebtoken

npm install cookie-parser

# Mysql

## 1.user table
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|user_id|int|NO|PRI|NULL|auto_increment|
|id|varchar(50)|YES||NULL||
|password|varchar(50)|Yes||NULL||
|admin|tinyint(1)|Yes||NULL||

## 2.token table
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|user_id|int|NO|PRI|NULL||
|content|varchar(500)|YES||NULL||

## 3.notice table
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|notice_id|int|NO|PRI|NULL|auto_increment|
|title|varchar(200)|YES||NULL||
|date|varchar(20)|Yes||NULL||
|description|varchar(200)|Yes||NULL||

## 4.work table
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|work_id|int|NO|PRI|NULL|auto_increment|
|title|varchar(200)|YES||NULL||
|description|varchar(200)|Yes||NULL||
|image_file|varchar(200)|Yes||NULL||
|user_id|varchar(200)|Yes||NULL||
|date|varchar(10)|Yes||NULL||
|access|tinyint(1)|Yes||NULL||