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
### Video 1 [Link to Video 1](https://drive.google.com/file/d/1zMezbFKHEojPee87LRJOO9rfPvAVpMfi/view)
This video shows how to use MySQL Shell. I dropped and created the database. I then seeded the database and started the server. 

---
### Video 2 [Link to Video 2](https://drive.google.com/file/d/1ahZrMAA1iSXLY-ZTEtGe2qDddoe9fQf-/view)
This video shows how to get all tags, categories, and properties.

---
### Video 3 [Link to Video 3](https://drive.google.com/file/d/1DvfcBR3sQEzIow0LXeRtbNMzHWC2dnKi/view)
This video shows how to get one tag, cateogry, and product based on the id. 

---
### Video 4 [Link to Video 4](https://drive.google.com/file/d/14iuovUnbN_PWkw9dbr-VsWOUlsSCzZH9/view)
This video shows how to post, put and delete tags.

---
### Video 5 [Link to Video 5](https://drive.google.com/file/d/15wLSrUvHu_7a7zZc_6138fNzMEB6UFL6/view)
This video shows how to post, put and delete categories

---
### Video 6 [Link to Video 6](https://drive.google.com/file/d/1wmlYW3OxVUaKNg9CoHz69LUICLEOap-c/view)
This video shows how to post, put, and delete products.

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