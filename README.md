# 🧩 Janelly Template

A full-stack boilerplate app built **completely from scratch** (no Create React App or scaffolding tools).  
It provides a solid starting point with authentication, password recovery, and a working backend–frontend setup so developers can **jumpstart their own app development** instead of starting from zero.

---

## 🚀 Features
- Pre-built auth flows: sign-up, login, logout, and password recovery with secure token hashing  
- Reusable structure: landing page, login page, sign-up page, customizable frontend + backend  
- Backend included: Node.js + PostgreSQL for authentication & data storage  
- Environment configuration: `.env` support for secrets and email integration  
- Built from scratch: no CRA or generators, showing full-stack setup knowledge  

---

## 🛠️ Technologies Used
- **Frontend**: JavaScript, React  
- **Backend**: Node.js, Express  
- **Database**: PostgreSQL  
- **Other**: JWT, bcrypt, dotenv  

---

## 🎥 Demonstration
### **Sign Up**  
![signUPloop](https://user-images.githubusercontent.com/54867270/224527033-93c45b73-33ea-4d8d-bf39-49139c2fb332.gif)
### **reset password**
![passwordReset](https://user-images.githubusercontent.com/54867270/224526324-af24a58e-e06a-4d55-86f0-fa13e9cbeda9.gif)


## ⚙️ Setup

### 1. Initialize Your Project
```bash
mkdir my-new-app && cd my-new-app
git init
git remote add template git@github.com:janellycedenoaquino/Janelly-Template.git
git fetch template
git merge template/main
git branch -m master main
```

## 🛠️ Customize

Now that you've merged the template, follow these steps to get set up:

1. **Update project metadata**
   - Open `package.json` and update the `name` and `description` fields.  

2. **Configure database**
   - Edit `dbName` inside `server/db/index.js`.  
   - Create a PostgreSQL database with the same name:  
     ```bash
     createdb <YOUR_DB_NAME>
     ```
3. **Set up environment variables**
   - Create a `.env` file in the root directory.  
   - Add the following variables:  
     - `SECRET_TOKEN` → used for hashing passwords and generating recovery tokens  
     - `MY_EMAIL` → the email address you’ll use to send recovery emails  
     - `MY_PASSWORD` → the password for that email account

   👉 You can generate a random string for `SECRET_TOKEN` here: [Random String Generator](http://www.unit-conversion.info/texttools/random-string-generator/)

   **Example `.env`:**
   ```env
   SECRET_TOKEN=badBTcH809az3ZhIjxH9jgf2bbs9BsvM6Wh2G07XnPr1rWZhpQuUAy2h8qNbNvrK6gZVgByQey
   MY_EMAIL=myAppEmail@gmail.com
   MY_PASSWORD=myAppEmailPassword123
4. Update favicon
   - Replace the existing favicon.ico with your own image.
   - Make sure the new file is named exactly favicon.ico.
5. **Create `.env` file**  
   - Add the following environment variables:  
     - `SECRET_TOKEN` → used for hashing passwords and generating recovery tokens  
     - `MY_EMAIL` → the email you will use to send recovery emails  
     - `MY_PASSWORD` → the password for that email account  

   👉 Generate a random string for `SECRET_TOKEN` here: [Random String Generator](http://www.unit-conversion.info/texttools/random-string-generator/)

   **Example `.env`:**
   env
   SECRET_TOKEN=bb809az3ZhIjxH9jgf2bbs9BsvM6Wh2G07XnPr1rWZhpQuUAy2h8qNbNvrK6gZVgByQey
   MY_EMAIL=myAppEmail@gmail.com
   MY_PASSWORD=myAppEmailPassword123
6. Update favicon
- Delete the existing favicon.ico in the project.
- Replace it with your own image.
- Ensure the new file is named exactly favicon.ico.



## run your program
```
npm i
start both backend and frontend with "npm run start"
> both back-end and front-end are running on port 1995
```
📌 Notes
This template was created entirely from scratch (no CRA).
Designed for clarity, reusability, and security in rapid development.
