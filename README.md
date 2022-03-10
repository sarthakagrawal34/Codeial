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
2. Export an action corresponding to users_controller profile by: **module.exports.profile = function(req,res){}**
3. Create a route for the controller to be accessible inside the route folder named as **users.js**.
4. Repeat the same steps that we used to create the previous route index.js.
5. We need to map a route to the users_controller profile action.
        <!-- const router = express.Router();
            const usersController = require('../controllers/users_controller');
            console.log("Users Router loaded");
            router.get('/profile', usersController.profile);
            module.exports = router; -->
6. Now to be used by main server we make changes in index of routers that is we use it as a list of routes.
7. Index router was accessing the home_controller. Considering index.js as the index or root of the route, we want this route to be controlling all the other routes or having a list of all the other routes. For that in index.js route we need to do:-
        <!-- 
        router.get('/', homeController.home);
        router.use('/users', require('./users'));
        -->
8. Add everything to git and commit it.
9. Add another route and controller naming posts_controller and another action in home and user as a assignment.
10. Add everything to git and commit it.

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

### Improving SCSS of the home page
1. We have to improve the design of our website. For that, we will create an SCSS file for the home page and we will align the feed section and the user section side by side using flex.
2. Create a new file inside the assets folder **home.scss** and link this file with home.ejs.
3. Create the styling page as your assignment using flex property

## Async Await + Error Handling
We will be reducing the complexity of the code that we have built so far in terms of database queries. We will also be creating notifications for various tasks visible to users **Flash message**.

### Converting to Async Await
**Asynchronous** - When the task is running on the CPU at the same time the main thread of the node.js server is executing something else. Asynchronous code doesn't have to wait – the program can continue to run. We can do this to keep the site or app responsive, reducing waiting time for the user
1. We will make the home_controller.js page clutter-free using either **promises or async-await**.
2. **Async await** tells the server that the function contains some asynchronous statements and we need to wait with each async statement. Once it gets executed then and only then moves on to the next statement.
3. It is not always necessary to change every part of the async code to async-await. Although it is a good practice to follow the same convention everywhere.
4. We will convert posts_controller.js and comments_controller.js files into Async Await.

### Creating Flash Messages
1. Flash messages are stored in the session cookies and they are cleared on the next request. Hence, whenever we sign in, the flash message is sent into the session cookie, and whenever we refresh that flash message is erased.
2. We will be using the Connect Flash library for creating flash messages.
3. To install the Connect Flash library use the command **npm install connect-flash** in the terminal.
4. We have to require the library inside the index.js file, which is the entry point for the application.
5. Using the app.use method, we will enable the connect-flash package. This comes right after the use of sessions inside the index.js file.
6. Inside the users_controller.js file we will create two flash messages — one for sign-in and one for sign-out.
7. We need to send the flash message to the response. For that, we will create a new file **middleware.js** inside the config folder.
8. Then for accessing flash messages we do changes in layout.ejs file in which we display success message only if there is success and success.length>0 that is success includes some message.

### Introducing Noty
1. We will make the notification look fancy, a little more animated using a library known as **Noty.js**.
2. To include Noty.js in the project we have to include following links -
3. Include the CSS link in the layout.ejs file 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.css" integrity="sha512-NXUhxhkDgZYOMjaIgd89zF2w51Mub53Ru3zCNp5LTlEzMbNNAjTjDbpURYGS5Mop2cU4b7re1nOIucsVlrx9fA==" crossorigin="anonymous" />.
4. Include the script tag in the layout.ejs file 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js" integrity="sha512-lOrm9FgT1LKOJRUXF3tp6QaMorJftUjowOWiDcG5GFZ/q7ukof19V0HKx/GWzXCdt9zYju3KhBNdCLzK8b90Q==" crossorigin="anonymous"></script>.

### Summarizing
1. To make the code look clean and modular, we used async-await.
2. We have used Noty.js to show notifications in a fancy way.
3. Notifications are shown using flash messages.
4. We use flash messages which are set up in session cookies.
5. We use the Connect Flash library to set up flash messages in session cookies.

**-------------This ends how to use async+await which makes the code more easy to read --------------------------**


## Converting to AJAX

### Creating a Post:: Sending Data
We will be going to use JQUERY AJAX for the website.
1. In { layout.ejs } paste the link { <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6/jquery.min.js"></script> } to include jquery just below noty link.
2. We have to create a JS file that fetches the data from the form and sends it in the JSON format to the action.
3. In the js folder inside the assets folder, we create a file {home_posts.js}.
4. Include the script {home_posts.js} inside the {home.ejs} file to load the script.
5. While creating a post, we need two things -
    ○ A function that handles the submission of the post
    ○ A function that receives the data of the created post and displays it.
6. Create a function that sends the data to the controller action in {home_posts.js}
7. Whenever the form is submitted, we don’t want it to submit own its own. Hence, we will use the parameter preventDefault.
8. Submit the form manually using AJAX.
9. Send in the data that we create the post for and serialize it. ( serializing means to convert the form data into JSON { key-value pair } ).
10. Once we have submitted the form we will receive it in the { post_controller.js } and view the data in the { post_controller.js }.
11. Check whether the request is AJAX. The type of an AJAX request is -> {XML HTTP Request} (XHR).
12. If the request is AJAX then we have to return JSON with a status.
13. Alongside data, the general format of interacting when we are sending data back by JSON is to include a message. The message can be that “Post is created”.

### Creating a Post:: Receiving Data
1. For deleting the post we need some id that can uniquely identify the post.
2. Add class to the delete button so that we can give it common styling and also attach click listeners to it.
3. For creating the post in the DOM, we need a function that will help us in converting the text of HTML into a JQuery object.
4. Create the function and pass the post data that we have received and return the text of HTML.
5. The data that has been displayed has another key data that needs to be sent as a post.
6. Prepend it to the list of posts that are displayed on the screen.
7. Thus, we have successfully created a post, displayed on the screen with AJAX. Our page is not getting refreshed anymore while creating a new post.

### Deleting a Post
Post is now created and displayed using AJAX without the need to refresh. Now, let us try to
do the following things:
1. Sort the post according to the nearest post which was created in time first {Reverse
chronological order}.
2. Deleting the post.

#### Sorting the Post
1. In { home_controller } we need to add a sort function for the post.

### Deleting the Post
1. For deleting the post we need two things - To be able to send the data to the controller to delete it, and once we get confirmation all we need to do is remove that post from the DOM.
2. Let’s assume that we will be getting data that has the id of the post that is deleted. (we will be sending it in the URL)
3. We have just created a function to delete id from the DOM but we have not received the post id from the server & handled the AJAX request.
4. We went to our {home_posts.js} and created a function that sends the post id to be deleted, blocks the natural behavior of the delete link, and sends it via AJAX parallelly.
5. When the function sends the AJAX request it also receives some data that is the post id and it will be removed.
6. The function that will be sending the AJAX request we need to populate the delete link argument and put it on the delete link.

### Display notifications of creation and deletion using NOTY.
1. Add/ delete comments dynamically with AJAX and then move on to NOTY.
2. We created a JS file that sends the form data via AJAX.
3. Using preventDefault we have prevented the default behavior to get submitted and we send the data to the server via AJAX parallelly asynchronously.
4. On the server-side we used request.XHR and we checked whether the request is an AJAX request or not.
5. If it was the AJAX request we have sent data in JSON format and displayed it using a function.
6. For the delete link to be activated, we created another function that sends the delete request via AJAX. Once we get a successful response, we remove that element from the DOM

## File Upload
### Introduction to Uploading files
One of the very important parts of creating a web application or website, in general, is files. You have your files that run the code and show something on the browser. Also, when the user is interacting with the website, he/she would also want to upload some files. For example - Uploading your profile picture or posting an image on Facebook or any other social networking sites. In this module, we will be creating a page to upload our profile picture on the user’s page using a library.

### Uploading Files: How Does It Work?
● We have our server that has been initialized on a file system or an operating system.
● Let’s say on our profile page, we choose a picture and we send it to the server in the
form of a file { File is a sequence or a stream of bytes }.
● The server is connected to the database which is not saving the file. When the file is
sent to the server we store our file inside the folder { avatar } and reference it
inside the database.
● The hash of every user in our database { MongoDB }, we have a key called an
avatar and that key has a value which is the path to the file.
● The separate folder is one of the local storage options that we use for smaller-scale
projects.
● In the real world, we store the file somewhere else in a bucket { A folder on the
cloud is known as a bucket }. We store the file in the bucket and give the database
the path of the file.
● We can store more details in the database other than the path that is the file type,
name of the file, size of the file, etc.

### Installing Multer + Documentation
1. Usually, when we are submitting the form we send some text data, some number data, etc but to send a file we have one input type called a { file } which is the attribute value.
2. We use another attribute called encryption type, and we say that this form has multipart data { It can have the text and file data }.
3. In the terminal install multer using the command { npm install multer }.
4. Whenever we define the variable for multer, the setting, or the configuration of multer for uploading the avatar of the user, we will also be defining the destination of the file it will be stored at and the file name.
5. In the file { user_profile.ejs }, we will put multipart inside the form using the attribute enctype. We will define another input field with a type file where we will be uploading the profile picture.
6. For setting up multer we will go to the models folder and inside the file { user.js } we will be doing the following things.
    1. Import the multer library and the path of where the file will be stored.
    2. We will define the path that is { /uploads/users/avatars }.
    3. We will create a new folder { uploads }, inside the uploads folder we will create one more folder { users }, inside the users folder we will create one more folder { avatars }.

### Configuring Multer for User Avatar
1. We have defined the folder in a variable, but not in the schema of the database.
2. We will define the field inside the schema with the datatype string.
3. We have to link the avatar path, multer, and the avatar field making sure that whenever we are saving the file it gets saved inside the folder using multer and the path gets saved inside the field.
4. We will be using disk storage as we are storing the files and folders inside the same machine.
5. multer.diskStorage is a function that will take an object which has further two keys, one of them defines the destination and the other defines the filename.
6. The reason for the file name key is because of the following reason - If you and I are going to be saving a file with the same name, one of the files will be overriding the other one so to prevent that we are going to append the current time in { milliseconds } since 1st Jan 1970 midnight which is called as EPOC time using Date.now() function.

### Saving File from Params
1. In the filename key of the multer.diskStorage function, there exists the field name in which we are storing the file.
2. Every file that we upload for the field for every user will be stored as avatar- { the value of Date. now() function } .
3. We need to define static functions - { Static functions are the ones which can be called overall on the whole class }.
4. .single is the property that says that only one file can be uploaded for the field name avatar.
5. We have to define the avatar path because we need this avatar path { /uploads/users/avatars } to be available publicly for the user model.
6. We have to create a check while uploading the file to check whether the user is updating the file or uploading the file.

### Showing the Avatar, Connecting the Dots
We have to show the image that we have uploaded on the profile page.
1. We have to declare an img tag and the src for this image will be users.avatar as this is the path for our image.
2. We need to make this path available to the browser when the browser asks for it.
3. Inside the { index.js } file, make the uploads path available to the browser using app.use method

### Edge Case:: Replacing an Avatar
Whenever we are uploading an avatar while one was already uploaded earlier, the previous one either gets replaced, deleted or archived somewhere else.
1. Inside the file { users_controllers.js } { if there is any file in the request then we have to upload it } we have to check if the user already has an avatar associated with him /her.
2. If it is present, we have to remove that avatar and upload a new one.
3. For deleting the previous avatar, we need the FS { file system } and the path module.

### Summarizing File Uploads
1. You can limit the size of the file that the user can upload, you can limit the type of file that the user can upload using multer.
2. Input type file keeps the first level of security, it doesn’t give you the path.

## APIs (making APIs and JWT authentication)
### Introduction:: APIs:: Why and What
1. We will study the workings of API from the server-side. We will also understand the process of making our API.
2. Whenever we want two devices to communicate with minimalist resources, we use API { Application Programming Interface }.
3. When we use an API, two devices communicate using a particular format. The most popular is the JSON.
4. We are not sending HTML and receiving it back because we want our communication to be fast.
5. Frameworks like Angular, VueJs, React are examples where we are using API to interact between server and client-side { framework }.

### The Postman
1. Though API is used when we are interacting using a frontend framework, we will beusing Postman which will act as our frontend framework.
2. Download Postman using the given link below according to your OS.
3. Create an account on Postman.
4. Just like a form being submitted, we can use the form data to be sent over through Postman.
5. We will be able to submit the form assuming the device we are using is an Android device and how the data would be communicated in an API when the form is submitted in the key and value that will be simulated over here.

### Setting Up The Directory Structure
1. The first part of creating an API is to set up the directory structure so that the code which sends the response and accepts the request in an API format is there in separate files.
2. The controller folder will have an API folder that contains all the controllers that are interacting in JSON format.
3. Routes will also have an API folder.
4. V1 { old version } and V2 { latest version } - Let’s say the users are using the android application, we suddenly make some changes to the database. We would want that whenever a new set of users install the application they install the latest version. But we also do not want to bug the old users to change their version of the application. This is where we can use the concept of versions of API.
5. Create one folder inside the controllers folder and routes folder named { API }.
6. Create a new V1 folder for each API folder inside the controllers and route folder.
7. API folders will have their index files. Each version also has its index files.

### Rendering an API
1. We have to make our first API. For that, we need to define routes and controller actions for the routes.
2. Inside controllers API V1, create a new file { posts_api.js }
3. Inside V1 in the routes folder, create a new file { posts.js }.

### Playing With APIs
1. We will be sending data from the database in the API and try to delete the post without authentication and authorization. We will render the list of posts that are inside the database. In the following step, we will delete one of the posts.
2. The places where we have returned a flash message or the places we were redirecting the user to some other page that will be replaced by returning JSON.
3. Right now we are using unauthorized and unauthenticated requests.
