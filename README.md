# boilerplate

## Setup
To use this as boilerplate, you'll need to take the following steps:

> Don't fork or clone this repo! Instead, create a new, empty directory on your machine and git init (or create an empty repo on Github and clone it to your local machine)

Now you will have to add the Janelly-Template as a remote and merge it into your own repository.
```
git remote add boilermaker git@github.com:janellycedenoaquino/Janelly-Template.git
git fetch boilermaker
git merge boilermaker/main
git branch -m master main
```

## Customize
Now that you've got the code, follow these steps to get acclimated:

1. Update project name and description in package.json
3. edit dbName inside server/db/indexjs
4. create a database with same name used in dbName inside file server/db/indexjs
5. This commands will help you create your databases
```
createdb <YOUR dbName>
```
6. create .env file
   - create an enviroment variable called "SECRET_TOKEN" and assign it a random string
   - use an app to generate a random string ex: http://www.unit-conversion.info/texttools/random-string-generator/
   - this is an example of what your .env file should look like: 
  ```
  SECRET_TOKEN=badBTcH809az3ZhIjxH9jgf2bbs9BsvM6Wh2G07XnPr1rWZhpQuUAy2h8qNbNvrK6gZVgByQey
  ```


## run your program
```
npm i
start both backend and frontend with "npm run start"
```
> both back-end and front-end are running on port 1995

#### template created completely from scratch without create react app
