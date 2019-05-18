//NodeJS
//project_product_managrment_system
//version: 2019_05_18_1.0
Please follow this steps:
setup local mongodb
0. create folder "mydatabase" under C
1. open cmd
2. type "mongod --dbpath c:\mydatabase", this cmd do not colse!!!
3. open a new cmd
4. type mongo, then we set up mongodb done
5. type use productmenage
6. type db.pruduct.insert({"title" : "iphone4", "price" : "500", "fee" : "20", "pic" : "", "description" : ""})
7. type db.pruduct.insert({"title" : "iphone51", "price" : "600", "fee" : "20", "pic" : "", "description" : "51" }
8. type db.pruduct.find({}), then will show above 2 linformation
9. type db.user.insert({"username" : "admin", "password" : "e10adc3949ba59abbe56e057f20f883e", "status" : "1"})
10. type db.user.insert({"username" : "zhangsan", "password" : "e10adc3949ba59abbe56e057f20f883e", "status" : "1"})
8. type db.user.find({}), then will show above 2 linformation

setup visual code
1. Open folder with visual Code;
2. Use Keyboard "Ctrl + ~" to open command at visual code
3. On command line, type "npm install", then enter, after finish go to step 4,
4. On command line, type "node app.js", then enter,
5. Open browser Type localhost:3003/admin/login-->will display user login page
6. type user name "admin", password "123456", then will login
7. you can logout and use create, view, update, delete product feature to update database
