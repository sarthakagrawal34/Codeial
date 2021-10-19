#

## Some tricks used in the project
1. Use **interpolation method**. It is the process of embedding an expression into part of a string. symbols used are **` `**.
2. Getting rid of doing 'nodemon index.js' again and again change in package.json scripts making 
**"start":"nodemon index.js"** so now do in terminal **npm start**.


## Initial steps to create a folder and directory structure
1. Create a **codeial** folder which is the project name.
2. Create a **index.js** file which is the server file.
3. First initialize the project using **npm init** which install the **package.json** then do the required things to setup the project. 
4. Now for making a project scalable I first make directories using **mkdir** command in git bash terminal.
5. The initial directories are **routes, controllers, views, models, config**. There will be more. But this is our structure.


## Firing the Express server and defining port on which it should run.
1. Install **Express** by using **npm install express**. This will be in **package-lock.json**. And will create node_modules folder which contains all the dependencies which express will required. To check we can see in package.json there will be dependency naming express and the version.
2. It should be require in the entry point server i.e index.js. **const express=require('express');**
3. Next step is to call the express server by : **const app=express();**
4. Now define a port where the server will run on browser by: **const port=8000;**
5. Now to bind and listen the connections on the specified port we use:**app.listen(port,function(err){});**
6. Now for testing that server is running or not we use: **nodemon index.js**


## Adding git to the project so to easily track the changes.
1. First initialize git by: **git init**.
2. Then we don't want to upload **node_modules** folder as it is very large and it can be easily install so we add this to **.gitignore file**.
3. Now next step is to add every thing to git by: **git add .**
4. Can check by **git status and git log**.
5. Adding this on remote origin that is github by:


## Setup the Express Router
Routes are the entry point for all the requests from the browser.
The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.

1. Add **index.js** file in routes folder, which is the entry point for all the routes and require express in it. 
2. Note: Requiring express will not create a new instance of express but will fetch the existing express.
3. Now calling the express router by: **const router=express.Router();**
4. And now finally export the router module so that it can be use anywhere by: **modules.exports=router;**
5. Now app have to use this module so in index.js server we do: **app.use('\', require('./routes'));**


## Setup the Express Controller
After route setup, it’s time to set up the controller {Action that is taken up for any route}. A
group of actions bundled together is known as a controller.
Controllers are the thing that directly responds to each HTTP Request that comes into your application, as such each web request will result in (if routed) a new instance of a Controller (Class).
1. Create a new inside controller **home_controller.js**.
2. home_controller has an exported function that is home: 
    **module.exports.home=function(req,res){return res.end();}**
3. Create a function that will take two parameters **request and response** by default.
4. In the request-response, we have to return something {It can be HTML also}.
5. We need to access that function in routes so now go in routes.
6. Requiring the home_controller inside the route index.js: 
    **const homeController = require('../controllers/home_controller');**
7. To access the home controller action inside route: **router.get('/', homeController.home);**


## Again git add . the changes and commit it

## Add second router and controller
1. Create a file in controller **users_controller**.
● Export an action corresponding to users_controller i.e profile by: **module.exports.profile = function(req,res){}**
2. Create a route for the controller to be accessible inside the route folder named as **users.js**.
3. Repeat the same steps that we used to create the previous route index.js.
4. We need to map a route to the users_controller profile action.
        <!-- const router = express.Router();
            const usersController = require('../controllers/users_controller');
            console.log("Users Router loaded");
            router.get('/profile', usersController.profile);
            module.exports = router; -->
5. Now to be used by main server we make changes in index of routers that is we use it as a list of routes.
6. Index router was accessing the home_controller. Considering index.js as the index or root of the route, we want this route to be controlling all the other routes or having a list of all the other routes. For that in index.js route we need to do:-
        <!-- 
        router.get('/', homeController.home);
        router.use('/users', require('./users'));
        -->
7. Add everything to git and commit it.
8. Add another route and controller naming posts_controller and another action in home and user as a assignment.
9. Add everything to git and commit it.

## Installing EJS & Set Up the View Engine
We need to send something back to the browser in HTML format from an HTML file from the Views folder using View Engine. **app.set()** is an object where different properties are predefined {keys are present}. Whenever we put a value of those keys, the express app takes up those values and does something with those values.

1. First of all install ejs by: **npm install ejs**. We will see a new dependency in package.json.
2. Set view engine as ejs in index.js file by: **app.set('view engine', 'ejs');**
3. Set the path for the folder views by: **app.set('views', './views');**
4. Now in views folder add a new file naming: **home.ejs**. Create a simple html file.
5. Now in home_controller first comment the direct html sending and then using the function **res.render()** render the ejs file: 
    <!-- return res.render('home', {
        title: "Home"
    }); -->
6. Do same for users_controller and made a users.ejs file in views and render it.
7. Add everything to git and commit.