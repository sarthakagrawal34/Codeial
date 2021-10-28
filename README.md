# Project- Codeial
A project to learn backend in which learning how to create directories, express server, routes, controllers, views, assets, and database and add to git simultaneously.

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
5. Adding this on remote origin that is github.


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

## Using Partials and Layouts
   ### Understanding Partials in Views
    ● Partials (Partial code put into another file) - The advantage of EJS is that it
    combines data and a template to produce HTML. This makes our code scalable and
    manageable. One of the most important features of EJS is its use of partials. Using
    partials, you may write a piece of code just once, and use it at many places as and
    when required.
    ● Whenever we have some piece of code that is either very long or a piece of code
    that is used again and again in different files, we may store that in a separate file,
    and then re-use it wherever it needs to be added. One such example would be the
    creation of a NavBar.

   ### Understanding Layout in Views
    ● Layouts - Layouts enable us to dynamically fix content or elements to a page in such a way that even if a different page is requested, the content remains but the page is successfully accessed.
    ● We can put in any layout that we want the website to look like into one file &
    whatever variables need to be put in or if the central content needs to be changed, we can just tell it using our view engine that this is the layout of the website wherein some part needs to be changed and can be filled in as in when needed.

## Implementing partials
1. Make a _header and _footer ejs file and use this in home.ejs and users.ejs by:
    **<%- include('_header'); %>**  &&  **<%- include('_footer'); %>**
2. NOTE - We are using different naming conventions for partial files to make them separate from all the other ejs files. Hence we have used **_filename.ejs**.

## Creating Layouts
Generally, a website can have multiple different layouts but for now, we are focusing on
building a common layout for our whole website.
We are going to use the library for layout that is **express-ejs-layout**.
1. Install the library **npm install express-ejs-layouts**. It can be seen in package.json dependency.
2. We have to create a file in the views folder **layout.ejs**.
3. In index.js { entry point } we need to require the library we have installed by:
    **const expressLayouts = require('express-ejs-layouts');**
4. We have to tell our app to use that library before requiring the routes in an index.js file { entry point } by:
    **app.use(expressLayouts);**
5. In layout.ejs copy the same code of { home.ejs } or { user_profile.ejs } and in the
variable part do as follows:-
    <!-- <body>
        <%- include('_header'); %>
        <%- body %>
        <%- include('_footer'); %>
    </body> -->
    
6. Remove everything from { user_profile.ejs } & { home.ejs } except the variable part in both the files.
7. So Layout gets rendered, body gets filled with whatever it is there in { user_profile.ejs } & { home.ejs }.
8. Express ejs layouts is being used by the app it finds a layout that should be a wrapper that should be covering the { user_profile.ejs}, so the wrapper is rendered also the { user_profile.ejs} is rendered together with it and it is sent it to the browser.
9. Combining { user_profile } and layout, filling the { user_profile } in the place of the body and it is sent back to the browser.


## Setting up and using static files
1. Firstly we need to tell in which folder the app { index.js } should look out for static files.
    **app.use(express.static('./assets'));**
2. Create assets folder in codeial using **mkdir assets** and then in assets use **mkdir css js images** to create 
    3 folders.
3. Now in css create layout.css and link it to layout.ejs
    <link rel="stylesheet" href="/css/layout.css"> <!-- in href it is automatically looking into assets folder as we use static in index.js-->>
    
    ### Static Files For Pages
    1. The app should automatically render the link tag into the head of the layout so to do
       that -
    2. Just below app.use(express.static (‘./assets’)) in { index.js } {Entry point } - Extract style and scripts from the sub pages into the layout using -
        <!-- app.set('layout extractStyles',true);
        app.set('layout extractScripts',true); -->
    3. Go to { layout. ejs } wherever we need to put up the style tag we just need to do -
        <!-- <%- style -%> -->
    4. Whenever there is something termed as a link tag or a script tag in the body, they are automatically put on the top, at their correct positions.

## Final step is to setting up the datbase
1. First make a {mongoose.js} in config folder to setup the MongoDB. Then do **npm install mongoose** which install a package that can be seen in package.json dependency.
2. Require mongoose in { mongoose.js } by **const mongoose=require('mongoose');**
3. We need to provide a connection to the database by: **mongoose.coonect('mongodb://localhost/codeial_development');**
4. Whenever there is an error while connecting to the database we need to console that, This will display the console.log like an error.
    <!-- // acquire the connection(to check if its successful)
    const db= mongoose.connection;

    //error
    db.on('error', console.error.bind(console, "error connecting to db"));

    //up and running then print the message
    db.once('open', function(){
        console.log("Connected to database :: MongoDB");
    }); -->

5. If the database is connected properly one callback function will be called.
6. To make that {mongoose.js } file usable we need to export it by : **module.exports=db**
7. Require mongoose in { index.js } [Entry point]. by: **const db=require('./config/mongoose');**

## Now to use the database for Manual Authentication
Authentication means establishing your identity. First, we will learn how to establish the identity manually then we will look at the drawbacks { extra code that we have to write }. Then we will be using a library for authentication.

The steps we will be looking at in this module -
● We send the username and password to the server.
● The server will receive the data and verify the identity from the database where, all the data is being stored.
● After that, It will create a token that will establish the user identity and send it back to the browser that stores it.
● Whenever the browser sends another request for fetching some data, it will send
the stored token alongside every request.
● The server will identify the identity of the user with that request.
● The browser will then serve user-specific data
● The browser will delete the token on sign-out that will lose the user identity.

### Setup the userSchema
1. In modele folder make a new file {user.js}
2. Require mongoose library as **const mongoose= require('mongoose');**
3. Now defining the UserSchema which tells that how should it be stored in database.
4. Whenever you create a new object the database should store a field called created
at and whenever you update that object the database should store a field called
updated at which gets updated. These two fields are managed by the mongoose
itself using the **timestamps** property.
5. Declaring a collection for the fields to be stored in db or to tell mongoose that User is the collection of all the schema by:
    **const User = mongoose.model('User', userSchema);**
6. Exporting the module by: **module.exports = User;**

### Now Rendering Sign-In and Sign-up pages
1. Create two ejs file for sign in and sign up.
2. Then in users_controller add 2 action corresponding to the two ejs files.
3. Now in routes also add 2 routes for the 2 conroller actions.
4. The type of request for both pages will be a GET request.
5. Now create form with method=post in both the ejs file and create a action in    
    users_controller for the form action.

### Now understanding cookies
● A cookie is a file that is stored by the browser. It is sent with every request to the server and the server sends back the same file to the browser.
● This file can be edited at the browser or the server level.
● It is used for a lot of purposes in terms of storing data related to the user,
establishing the user’s identity, or storing the product that the user has browsed in.
● A cookie is a file that contains key-value pairs.
● Browser is the environment in which the cookies reside. Thus, if free space is filled by the cookies in the browser, it will automatically clear all the cookies present over there.
● The key-value pair is stored in an encrypted manner.

### Creating and alternating cookie
1. For reading and writing into cookies, we will be using a library called cookie-parser 
2. Install the library using the command **npm install cookie-parser**
3. Require the installed library in the index.js file by **const cookie = require('cookie-parser');**
4. We have to tell the app to use the library in the middleware.
5. We have to set up the cookie parser using the app. use method. **app.use(cookieParser();**
6. Now we can play with the cookie in the dev tools in the application area.
7. In application cookie our server is present and there we can provide key-value pair which can be accessed in controller by **req.cookies** and can be alter by **res.cookie('key',value);**

### Setting up the create action in user_controller
1. We will create the user through the signup form that we have created and save that user in the database to establish the identity of the user. 
2. We will allow that user to be authenticated.
3. Once that user is authenticated, the next step would be to show the details of the user on the profile page.
4. We will remove the cookie after the user signs out of our webpage.
5. There can be two cases-
    ○   If the user already exists, we do not need to recreate his data.
    ○   If the user does not exist in the database, we will store all the data we have collected in the database.
6. For more details see the **create** action in users-controller file.
7. add to git and switch to new branch by: **git checkout -b manual-local-auth** for user sign-in

### Setting up the user createSession action in users_controller
1. Switch to new branch by: **git checkout -b manual-local-auth** for user sign-in
2. We have to establish the identity of the user of the system by signing in.
3. We have to check whether the user exists.
    ○ If the user exists, we have to check whether the password entered is correct or not.
4. We have to match the password entered by the user to the password present in the database.
5. If both the passwords match, then we will store the user’s identity in the cookie and send it to the browser.
6. If both the passwords don’t match we will redirect the user back to the sign-in page.
7. For more details see the **createSession** action in users_controller file.


### Show Details of Signed in User
1. Now we will send the user's sign-in information to the profile page so we change profile action.
2. We have to show the user’s information on the profile page.
3. The user should be able to access the profile page only when sign-in is complete.
4. If the user is not authenticated, then they should be redirected back to the sign-in page.
5. We have to check if the user-id is present inside the cookies.
    ○ If yes, then we have to find the user.
6. If the user is not found, redirect the user to the sign-in page.
7. If the user is found, then render the user to the { user_profile } page which will contain all the information about the user.
8. For more details See the **profile** action in the users_controller file.

### Authentication using passport.js
We have already done manual authentication in the app, now it is time to make the code or application more efficient and secure using a library called Passport. We will be setting up a passport for the first time in the application.
**Note :**
We have to checkout to the master branch back because we have created the manual local authentication branch at a point where the common code is in the master branch. Till signup, the code remains the same when we put in the authentication that is where we differentiate the code.






**------------------This Ends the project of how node.js works-----------------------------------------------**
