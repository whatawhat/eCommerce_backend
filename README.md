# eCommerce Backend
### Table of Contents
- [Description](#Description)
- [Video Links](#video-link)
- [How to Use](#how-to-use)
- [Sources](#sources)

## Description
This is an application that allows the user to keep track of their stock for a store. The user can get, create, update and delete tags, categories, and products. 

---
## Video Link
There are two videos to show  the features of the application. 
### Video 1 [Link to Video 1](https://drive.google.com/file/d/1sAQ-4LN4bKXMXu1-VCkbx2ksG88PZkG9/view)
This video shows how to get the tags, categories, and products. It also shows how to create, update and delete tags and categories.

---
### Video 2 [Link to Video 2](https://drive.google.com/file/d/1joCkntU7UuffN8L2098ncn_nnT0lM_-1/view)
This video shows the confirmation of the delete for categories because video one cut off. Then, it shows how to create, update, and delete products.

---
## How to Use
Install the necessary NPM packages to run the program. You will need inquirer, mysql, and console-table. 
```bash
npm install sequelize
npm install mysql2
npm install dotenv
npm install express
```
You will need to add the database to your workbench. In order for it to work. From there, run
```bash
mysql -uroot -p < db/ecommerce_db.sql
```
Add the seeds file by using
```bash
node seeds/index.js
```

After you install the NPM packages, seed the database and seed file, open the terminal and run 
```bash
npm start
```

From there, you can get, create, update and delete tags, categories, and products.

---
## Sources
Created and designed by me. Click [whatawhat](www.github.com/whatawhat) to visit my repository.