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
2. edit .env file and create env variable "SECRET_TOKEN" to help hash password
3. edit postgress database server/db/indexjs
4. create db same name used in server/db/indexjs
5. This commands will help you create your databases
```
createdb <YOUR APP NAME HERE FROM>
```

## run your program
```
npm i
start both backend and frontend with "npm run start"
start frontend alone with "npm run start-FE"
start backend alone with "npm run start-BE"
```
> both back-end and front-end are running on port 1995

#### template created completely from scratch without create react app
