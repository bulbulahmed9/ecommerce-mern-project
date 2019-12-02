# ecommerce-mern-project
<h2>See live demo at</h2> <h2> https://sleepy-crag-19937.herokuapp.com/ </h2>

Technology I have used :
1. React JS
2. Node JS
3. MongoDB/mongoose


<img src="githubImg/img1.PNG" />


What you need to run this code :

1. Node
2. NPM
3. MongoDB, Mongoose

How to run this code :

1. Make sure MongoDB ATLAS is running
2. Clone this repository
3. Update process.env.dbpassword, dbusername value with your test values for mongoDB in api/routes/auth.js file and api/routes/register.js    file
4. update jwt process.env.secret in middleware/auth.js file
5. Open command line in the cloned folder, To install dependencies, for front end go cd ecommerce/client and run npm install,
  for back end cd ecommerce and run npm install
6. To run the application for development, run npm start for client and run node server.js for back end
7. Open localhost:3000 in the browser
