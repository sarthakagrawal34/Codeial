# Project- Codeial
A project to learn backend in which learning how to create directories, express server, routes, controllers, views, assets, and database and add to git simultaneously.

## Some tricks used in the project
1. Use **interpolation method**. It is the process of embedding an expression into part of a string. symbols used are **backticks** and **$(expressions)**.
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
5. In layout.ejs copy the same code of home.ejs or user_profile.ejs and in the variable part do as follows:-
    <!-- <body>
        <%- include('_header'); %>
        <%- body %>
        <%- include('_footer'); %>
    </body> -->
    
6. Remove everything from user_profile.ejs & home.ejs except the variable part in both the files.
7. So Layout gets rendered, body gets filled with whatever it is there in user_profile.ejs & home.ejs.
8. Express ejs layouts is being used by the app it finds a layout that should be a wrapper that should be covering the user_profile.ejs, so the wrapper is rendered also the user_profile.ejs is rendered together with it and it is sent it to the browser.
9. Combining user_profile and layout, filling the user_profile in the place of the body and it is sent back to the browser.


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
    2. Just below app.use(express.static (‘./assets’)) in index.js {Entry point } - Extract style and scripts from the sub pages into the layout using -
        <!-- app.set('layout extractStyles',true);
        app.set('layout extractScripts',true); -->
    3. Go to { layout. ejs } wherever we need to put up the style tag we just need to do -
        <!-- <%- style -%> -->
    4. Whenever there is something termed as a link tag or a script tag in the body, they are automatically put on the top, at their correct positions.

## Final step is to setting up the datbase
1. First make a mongoose.js in config folder to setup the MongoDB. Then do **npm install mongoose** which install a package that can be seen in package.json dependency.
2. Require mongoose in mongoose.js by **const mongoose=require('mongoose');**
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
6. To make that mongoose.js file usable we need to export it by : **module.exports=db**
7. Require mongoose in index.js [Entry point]. by: **const db=require('./config/mongoose');**

## Now to use the database for Manual Authentication
Authentication means establishing your identity. First, we will learn how to establish the identity manually then we will look at the drawbacks { extra code that we have to write }. Then we will be using a library for authentication.

The steps we will be looking at in this module -
● We send the username and password to the server.
● The server will receive the data and verify the identity from the database where, all the data is being stored.
● After that, It will create a token that will establish the user identity and send it back to the browser that stores it.
● Whenever the browser sends another request for fetching some data, it will send the stored token alongside every request.
● The server will identify the identity of the user with that request.
● The browser will then serve user-specific data
● The browser will delete the token on sign-out that will lose the user identity.

### Setup the userSchema
1. In model folder make a new file **user.js**
2. Require mongoose library as **const mongoose= require('mongoose');**
3. Now defining the UserSchema which tells that how should it be stored in database.
4. Whenever you create a new object the database should store a field called created at and whenever you update that object the database should store a field called updated at which gets updated. These two fields are managed by the mongoose itself using the **timestamps** property.
5. Declaring a collection for the fields to be stored in db or to tell mongoose that User is the collection of all the schema by:
    **const User = mongoose.model('User', userSchema);**
6. Exporting the module by: **module.exports = User;**

### Now Rendering Sign-In and Sign-up pages
1. Create two ejs file for sign in and sign up.
2. Then in users_controller add 2 action corresponding to the two ejs files.
3. Now in routes also add 2 routes for the 2 conroller actions.
4. The type of request for both pages will be a GET request.
5. Now create form with method=post in both the ejs file and create a action in users_controller for the form action.

### Now understanding cookies
● A cookie is a file that is stored by the browser. It is sent with every request to the server and the server sends back the same file to the browser.
● This file can be edited at the browser or the server level.
● It is used for a lot of purposes in terms of storing data related to the user, establishing the user’s identity, or storing the product that the user has browsed in.
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

### Setting up the create action in users_controller
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
7. If the user is found, then render the user to the user_profile page which will contain all the information about the user.
8. For more details See the **profile** action in the users_controller file.

**--------------------This ends how to setup manual authentication---------------------------**


## Authentication using passport.js
We have already done manual authentication in the app, now it is time to make the code or application more efficient and secure using a library called Passport. We will be setting up a passport for the first time in the application.
Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application.
**Note :**
We have to checkout to the main branch back because we have created the manual local authentication branch at a point where the common code is in the main branch. Till signup, the code remains the same when we put in the authentication that is where we differentiate the code.

### Installing Passport.js]
1. Install passport.js library by: **npm install passport**  in the terminal.
2. Passport can be used just for local authentication or we can use different other ways to sign in.
3. Install the passport-local using the command **npm install passport-local** in the terminal.

### Setting up passport.js
1. We need to find out whether the user with a particular username and password exists or not.
2. If the user having a particular username and password exists, then we are required to set that user in the cookie.
3. Passport.js uses a session cookie session cookie stores all the session information plus it is encrypted.
4. In the config folder create a new file **passport-local-strategy**.
5. Require passport in the passport-local-strategy file by: **const passport=require('passport');**
6. Require passport-local-strategy inside the same file by:
    **const Localstrategy=require('passport-local').Strategy;**
7. We need to tell the app to use the passport session by: **passport.use(new LocalStrategy({}));**
8. Passport also helps in maintaining the session.
9. Inside the file users_controller.js we need to redirect the page after the session is created successfully in the passport.
10. Inside the routes folder in user.js file we have to import passport.
11. When we  need to create a session, we are also required to create a route for that session.
12. For more details see passport-local-strategy file and users_controller file and users.js route.

### Express sessions and using passport for authentication
1. Session Encrypted cookies - Automatically the user’s id will be encrypted and stored into session cookies, which can be done using a library **express-session**.
2. Install the library using the command **npm install express-session** in the terminal.
3. We have to require this library below mongoose inside the index.js file.
4. We need to require passport and passport - local - strategy libraries inside the index.js file.
5. We need to add middleware that takes the session cookies and encrypts them, below the place where we had set up the view.
6. For more details look index.js server file.

### Setting Current Authenticated User
Let us see the parameters that are important
1. We have set up the passport authentication. The user is now getting an identity established on the server and that identity is saved in a session cookie using an express session that is then communicating from the browser to the server.
2. **saveUninitialized:** whenever there is a request that is not initialized when the user has not logged in, we don’t need to store extra data in the session cookies.
3. **Resave:** When the identity is established we don’t have to rewrite or save the data if it is not changed.
4. We will be sending the data from the server about the user to the ejs files.
5. We have to first check if the user is authenticated or not using the **passport.checkAuthenticated** function that we will create using three parameters {req, res, and next}. This function will internally use the **isAuthenticated** function that is present in passport.js.
6. If the user is signed in, pass on the request to the next function controller’s action. If the user is not signed in, then redirect the user to the sign-in page
7. Once the user is signed in, set the users for the views using the **setAuthenticatedUser** function that will again take three parameters req, res, and next. This function will internally use the isAuthenticated function that is present in passport.js in which the req. user contains the currently signed-in user from the session cookie.
8. Inside the routes folder in the usersRoute.js, we have to use all the functionalities that we have implemented.
9. For more details see the passport-local-strategy file and usersRoute file

### Passing User data to views and restricting page access
1. We need to restrict the accessibility of sign-in and sign-up pages only when the user is signed out.
2. We have to access the data of the user on the profile page first that is inside the views in the users.ejs.


### Setting up Mongo store for session cookies
1. The session cookies get reset every time the server restarts. This is a problem!!!
2. We need some persistent storage to keep the cookies on the server. Hence if we store it inside MongoDB, we shall retain the data till there ia sign-out clicked or the cookies get expire due to **maxAge()**
3. We will be using Mongo Store for persistent storage and a library called connect-mongo.
4. Install the library using the command **npm install connect-mongo** in the terminal.
5. We have to require the mongo store library inside the index.js file.
6. We need to define another key in the **app.use(session())** a method that is a **store**.
7. For more details see the index.js server file.

### Creating Sign Out
We will create an action for signing out and see how signing out works with Passport.js
1. In the views folder inside the _header. ejs create a list of authentication items.
2. If the user is signed in, then we need to show the user’s name and a link to sign out.
3. If the user is not signed in, then we need to show the user the sign-in link as well as the sign-up link.
4. We have to create an action **destroySession()** inside the controllers folder in the users_controller.js file.
5. We have to create a route inside the route folder in the users.js file.

## Summarizing
1. We installed the passport library and local strategy package and required them.
2. We created a new strategy allocated to a middleware wherein we declared the username field to be an email.
3. If the user is found we returned using the call back done with error null and the user.
4. If the user is not found or the password doesn’t match we return.
5. If there is an error we return the error.
6. The done function is the callback function.
7. Passport. serialize and passport. deserialize is used to set id as a cookie in the user's browser and to get the id from the cookie when it is then used to get user info in a callback.
8. We have serialized the user that picks out the information from the user which needs to be fetched in the session cookie.
9. We have deserialized the user that picks the id from the session cookie and converting it into a user by finding it in the database, for that we have imported the user from the models.
10. We have a check authentication method that checks whether the user is authenticated or not.
    ○ If the user is authenticated it will return to the next function that is to be called.
    ○ If the user is not authenticated then take the user back to the sign-in page.
11. We need to access the authenticated users in the views. For that, we use the Set Authenticated user method.
12. Whenever a passport is initialized or a passport session is being used, an authenticated user is also being set.
13. The session is maintained by the express-session library
14. We just use the session, keep the name of the session, use the secret key to encrypt the data that is present.
15. Mongo Store contains the express session that is used to store the session information even when the server restarts it remains in the database so that the signed-in users don’t get reset in case the server restarts.
16. In the routes folder inside the { users.js } file, we have created a session using the
passport. authenticate wherein the local authentication is used.

**--------------------This ends how to use passport-local for authentication---------------------------**

## SCSS or SASS?
1. SCSS is the most commonly used and SASS is called the indented syntax.
2. SCSS stands for ( Sassy Cascading Style Sheets ) and it’s an extension of CSS which adds nested rules, variables, mix in selectors, inheritance, and a lot more features.
3. Sass (Syntactically Awesome Style Sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports, and more. It also helps to keep things organized and allows you to create stylesheets faster.
4. At the end of it, both SASS and SCSS are converted to look like CSS because browsers only understand CSS.
5. In SCSS, we need brackets and semicolons for the styling properties but in SASS we don’t need brackets and semicolons.

### Setting Up SCSS
1. Now it is time to dive into the code and add SCSS in the project. We will be converting the SCSS to CSS later.
2. We will be using Node SASS middleware which is an npm package.
3. We will write our code in SCSS. Post that, whenever the server starts, the middleware or the npm package will convert SCSS into CSS.
4. Whenever the views reference a stylesheet they will be referring to CSS because the CSS thing will be served to the browser.
5. Install using the command **npm install node-sass**.
6. After installing, require it in the file index.js by **const sassMiddleware=require('node-sass-middleware');**
7. We have to create a new folder in assets named **scss** and cut all files from css and paste to scss folder.
8. We need to put the SASS middleware just before the server is starting because we need those files to be precompiled before the server starts. Whenever the templates ask for CSS, these precompiled files will be given back. The properties inside the app.use would be -
9. **Source** - Path from where we pick up the SCSS files to convert them into CSS.
10. **Destination** - Path where we put the CSS files. 
11. **Debug Mode**- Whatever information we see while the server is running over the terminal, do we want to display some error that is there in the compilation of files while conversion. If yes then set it to true. If it is in **production mode** then we have to set it to false.
12. **OutputStyle** - Do we want everything to be in a single line or do we want it in multiple lines. If we want in multiple lines then use **extended** otherwise **compressed**.
13. **Prefix** - It is basically the location where the server should look for the CSS files.


### Using SCSS + Mini Assignment
1. The files do not get compiled at the time of starting the server.
2. Server compiles the files whenever we load the page it is required on, which makes it very slow.
3. When we are in production mode, we have to send all the files beforehand.
4. The assignment is to create the header and footer styles.
5. Create two new files in the SCSS folder header.scss & footer.scss.
6. In the layout.ejs file, link the header.css and footer.css files.
7. After reloading, the SCSS files will get converted into CSS files from header.scss & footer.scss.


## Database Relations (Posts, Comments)
We will create posts and comments in the application that we are building. But before that, we need to understand how all of these can be added to a database

### Node.js:: Explaining 1:1 and 1:M
1. Whenever we are storing any data inside the database, we are storing it in such a way that it models some part of the real world.
2. Let us take an example of the user and a password. Usually, a single user can have one password. Hence, this relationship will always be a 1:1 relationship.
3. There is an eg of school and students. Usually, one school consists of multiple students so this represents a 1:M relationship or vice-versa M:1.
4. We have another relationship called M: M which can be represented using theexample of authors and books { One author can have many books and one book can have many authors }.
5. The relationship between posts and comments will have a 1:M relationship.

### Creating Schema for Posts
1. We need to create a schema for posts and link it to the users. Whenever a post is posted on a website it has to be coming from a user, someone who is logged in. Thus, a post needs to have a user in it.
2. We need to create a file inside the models folder **post.js.**
3. We need to import mongoose inside the file post.js.
4. For creating a schema we need to use mongoose.Schema method, which will contain multiple fields.
5. Timestamps automatically introduce two fields created at and updated at.
6. For more details look into /models/post.js.

### Saving Posts to the DB
1. We need to go to the views and create a form from where this collection will have a document in it { i.e an entry is created in the database }.
2. We need to create an action inside the controller to save the data that is coming from the form into the database. We also and a route for mapping the form to the action.
3. We need to create a new file inside the controllers folder **posts_controller.js** for the actions.
4. We need to import the post schema that we have created inside the models folder.
5. We need to create a new file inside the routes folder **posts.js** for mapping theform to the action.
6. We have created the router and we will call it from index.js file to make it usable.
7. We need to update this in the action of the form.

### Display Post and Related User
1. We will be showing the post on the home page.
2. We need to find all the posts belonging to a user, then show them inside the home views.
3. We need to show the name of the user who is posting the posts. For that, we need to prepopulate the user.
4. Whenever we are loading the post from the database, we will load the whole user and show the desired data of the user on the home page. This is called pre-populating the user.
5. Initially, the id of the user is only showing on the home page but now we need to fetch the user also from the database.

### Check Authentication on Creating Post
1. We need to establish the user identity by restricting the form to be visible to the part only when the user is signed in so we will make changes in home.ejs file
2. We will put a check on the action level so that no one other than the user who is signed in will be able to write a post using html on chrome dev. so we make changes in posts_controller.js file.

### Creating Schema for Comments
1. There can be a user that can have multiple posts and each post can have multiple comments on it. A case where a post has no comments is also possible.
2. Inside the schema of the post, there is a reference to the user.
3. Inside the comments, there will be two references of users and posts.
4. A post can have an array of comments. Although, instead of using an array, we will just store an array of different objects, each object representing a comment.
5. We will create a schema for comments inside the models folder by creating a new file **comment.js**.
6. Whenever we are loading a post, we need to find out all the comments inside that post so that we include the ids of all the comments in the array inside the post schema.

### Adding Comments to the DB
1. We will create a form for comments, then create an action for comments, and then a route for it.
2. We need to show the form only when the user is logged in.
3. The method of the form will be POST, as we are going to send the data.
4. We need to send the id of the post to which comments need to be added.
5. We need to create the controller for the comments inside the controller folder **comments_controller.js**.
6. We need to create a comment on the post. But before that, we need to find whether that post exists or not.
7. We need to create the routes for the comments inside the routes folder **commentsRoute.js**.
8. We have created the router and we need to call it from indexRoute.js file to make it usable.

### Nesting Population:: Display Comments and Related User
1. We need to show comments alongside the post and also the author of the comments.
2. We will preload the comments and then display them.
3. We need to preload multiple comments and the user of that comment.
4. We need to show the comments on the home page.
5. For more details see the home_controller.js and home.ejs file.

**--------------------This ends how to create posts and comments and display it ---------------------------**

## Deleting and Updating Object in Database + Distributing Views
In this part, we will be focussing on improvising what we already have and on the very important part of CRUD, that is, the U { update } and D { delete }

### Deleting a Post (Authorized)
1. The first step is to learn how to delete a post. While deleting the post, we need to remember that there are comments associated with the posts therefore we need to delete all the comments as well.
2. To delete the post we need to create an action. The same action will delete the comments associated with the post.
3. We need a route that maps to that action.
4. We need to place a link to the route that we created to map the actions.
5. We will be making this format of the route- “ /posts/destroy/:id “ where id will be the string params.
6. Before deleting any post, we need to find whether that post id exists in the database or not.
7. Additionally, before deleting any post, we need to make sure that the user who is deleting the post is the same one as who created the post.
**NOTE** - When we are comparing the ids of two objects we need to convert them into a string. Using {.id} means we are converting the object id into a string.
8. If the current user and post user are the same then, simply remove the post associated with the current user along with the comments that are associated with that post.
9. If the current user and post user don’t match, then redirect to the same page on which the user was earlier.
10. Create the button for deletion, and the button should be visible only when the user is logged in and If the current user and post user are the same.

**Authorization on different levels** -
1. At the **view level** - show the button only if the user is authorized to.
2. At the **Router level** - Allow the user to be able to send the request only when the user is logged in.
3. At the **action level** inside the controller - Allow the post to be deleted only if the post and the user that is sending the request are the same.

### Deleting a Comment (Authorized)
1. Deleting comments will be a little different from deleting posts because comments can be done on another user’s posts also or on the user itself post.
2. We will create an action, a route, and a delete button with authorization and authentication checks.
3. We need to find whether the comment we want to delete exists in the database. If it exists, we need the id of the comment.
4. Before deleting a comment, we need to fetch the post id of that comment we want to delete.
5. In comments_controller.js we have put the check of user-id matching, in the routes comments.js we have put the check if the user is logged in.
6. Create the delete button and it will be only visible when the user id matches with the local user-id and the user are signed in.
<!-- EXTRA - You can add another level of authentication - If the comments posts user-id match the current user-id the user should be able to delete the comment which is there on the user’s posts. -->

### Distributing the Code into Partials
1. As the code base grows the number of lines in a file also grows. To solve this problem, we will be wiselydistributing the larger files into smaller files by creating partials.
2. The largest file in this project is home.ejs. Hence,we will be using partials to distribute the code of home.ejs into multiple new files **_post.ejs & _comment.ejs**.

### User Profile links
1. Now moving towards the update part of CRUD, we want the user to update his/her profile.
2. For that, we have to first display the list of all the users on the home page home.ejs only if the user is signed in.
3. To show all the users, we need to get all the lists of users from the controller home_controller.js.
4. After getting the list of all the users, we have to change the routes, as we have changed the routes of the profile.
5. As the route is changed, the actions also need to be changed.

### Updating a User’s profile
1. We have to first display the form for update when the user is viewing his/her profile page in users.ejs.
2. If the user’s id matches with the profile page user-id, then show the form. If the user doesn’t match, then we will show only the profile information.
3. We have to create a form in users.ejs where the action will go to **/users/update/:id**
4. The form will be mapped to a route which will be mapped to action inside the controller.
5. We have to create a route and action to be able to submit the form.
6. We will create the action first and then map it to the routes.
7. For creating an action, we have to call the module.exports.update in users_controller.js and check the update request { if the currently logged-in user id is equal to requesting user-id } then only update is allowed.
8. If the id of the current user and requesting user-id don’t match, then return the HTTP status code **401** for the unauthorized user.
9. We will create a route inside usersRoute.js which is mapped to the action we have created.

