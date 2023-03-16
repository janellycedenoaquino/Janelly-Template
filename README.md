# Template
### ABOUT THE APP
This app is a template app. It helps users jumpstart their own app development process. Essentially, it provides a basic structure and functionality for an app, so users don't have to start from scratch and build everything from the ground up.

One of the key advantages of using this template app is that it saves a lot of time and effort in the development process. Users don't have to worry about setting up basic features such as user sign-up, sign-out, and password recovery because these features are already built-in to the template.

Here's how the app works:
First, users would need to download the template app and open it in their preferred development environment. Once they have the template app set up, they can start customizing it to their needs.
[click for instructions here](#setup)

The app comes with several pre-built pages and features, such as a landing page, a login page, and a sign-up page. Users can modify these pages by changing the layout, adding new features, or removing existing ones.

Additionally, the app includes a basic backend that handles user authentication and data storage. This allows users to focus on building their app's core functionality, rather than worrying about the underlying infrastructure.

Overall, this template app is a great option for anyone who wants to develop an app quickly and efficiently. By using the template, users can skip over the basic setup process and focus on building the features that matter most to their users.

technologies used: JAVASCRIPT, REACT, NODEJS, POSTGRESQL...


## Demonstration


### Sign up
![signUPloop](https://user-images.githubusercontent.com/54867270/224527033-93c45b73-33ea-4d8d-bf39-49139c2fb332.gif)
### reset password
![passwordReset](https://user-images.githubusercontent.com/54867270/224526324-af24a58e-e06a-4d55-86f0-fa13e9cbeda9.gif)


## Setup
To use this as boilerplate, you'll need to take the following steps:

> Don't fork or clone this repo! Instead, create a new, empty directory on your machine and git init (or create an empty repo on Github and clone it to your local machine)

Now you will have to add the Janelly-Template as a remote and merge it into your own repository.
```
git remote add Janelly-Template git@github.com:janellycedenoaquino/Janelly-Template.git
git fetch Janelly-Template
git merge Janelly-Template/main
git branch -m master main
```

## Customize
Now that you've got the code, follow these steps to get acclimated:

1. Update project name and description in package.json
2. edit dbName inside server/db/indexjs
3. create a database with the same name as dbName
4. This commands will help you create your database
```
createdb <YOUR dbName>
```
5. create .env file
   - create enviroment variables called: 
      - "SECRET_TOKEN" - used for hashing password and recovering hashed password 
      - "MY_EMAIL"  - the email you will use to send recovery emails
      - "MY_PASSWORD" - the password you use with that email
   - use an app to generate a random string ex: http://www.unit-conversion.info/texttools/random-string-generator/
   - An example of what your .env file should look: 
  ```
  SECRET_TOKEN=badBTcH809az3ZhIjxH9jgf2bbs9BsvM6Wh2G07XnPr1rWZhpQuUAy2h8qNbNvrK6gZVgByQey
  MY_EMAIL="myAppEmail@gmail.com"
  MY_PASSWORD="myAppEmail@gmail.com's password"
  ```
6. Update Favicon 
   - delete picture and add your own 
   - make sure the new image has the name favicon.ico


## run your program
```
npm i
start both backend and frontend with "npm run start"
```
> both back-end and front-end are running on port 1995

#### template created completely from scratch without create react app
