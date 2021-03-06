// Requiring the express server in the main server
const express = require("express");
// Requiring the environment config
const env = require('./config/environment');
// Require the cookie parser library for parsing the cookie information
const cookieParser = require("cookie-parser");
//Firing the express server
const app = express();
//Define the port on which the server will be run
const port = 8000;
//Requiring the ejs layout library
const expressLayouts = require("express-ejs-layouts");
//Importing the database
const db = require("./config/mongoose");
//Importing the express session which is used for session cookie
const session = require("express-session");
//Importing the passport library it is the compulsory step for local passport
const passport = require("passport");
//Importing local passport
const passportLocal = require("./config/passport-local-strategy");
//Importing jwt passport
const passportJWT = require("./config/passport-jwt-strategy");
//Importing jwt passport
const passportGoogle = require("./config/passport-google-oauth2-strategy");
// Importing the connect-mongo library which stores the session information
const MongoStore = require("connect-mongo");
// Importing the SASS middleware library
const sassMiddleware = require("node-sass-middleware");
// Importing the connect-flash library for flash messages
const flash = require("connect-flash");
// Require the middleware which have been created for flash messages
const customMware = require("./config/middleware");
const path = require('path');

//Middlewares

if (env.name == 'development') {
  // sass middlware just before the server start so as the middleware precompiled the scss file to css file
  app.use(
    sassMiddleware({
      // Path from where we pick up the SCSS files to convert them into CSS
      src: path.join(__dirname, env.asset_path, "scss"),
      // Path where we put the CSS files
      dest: path.join(__dirname, env.asset_path, "css"),
      // to display errors coming while compiling
      debug: true,
      // everything to be in a single line or do we want it in multiple lines
      outputStyle: "extended",
      // location where the server should look for the CSS files
      prefix: "/css",
    })
  );
}


// express.urlencoded() function is a built-in middleware function in Express to read the request url
app.use(express.urlencoded());
// Now use cookie parser to read the cookies
app.use(cookieParser());
// Use the static files
app.use(express.static(env.asset_path));
// Make the uploads path available to the browser
app.use("/uploads", express.static(__dirname + "/uploads"));

//extracting styles and scripts from subpages
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//Use the ejs layout before the routes
app.use(expressLayouts);

//Set ejs as view engine
app.set("view engine", "ejs");
//Set the path for views folder
app.set("views", "./views"); //or app.set('views', path.join((__dirname,'views')))

// Creating session middleware that takes the session cookies and encrypts them
// It is fired when the serializUser function is called
app.use(
  session({
    name: "codeial",
    // TODO change the secret before deployement in production mode
    secret: env.session_cookie_key,
    // whenever there is a request that is not initialized { when the user has not logged in }, we don???t need to store extra data in the session cookies.
    saveUninitialized: false,
    // When the identity is established we don???t have to rewrite or save the data if it is not changed.
    resave: false,
    // Need to set the time after which cookie would be expired automatically
    cookie: {
      // maxAge is in milli seconds
      maxAge: 1000 * 60 * 100, //this is total to 100 minutes after which cookie will expire
    },
    // Mongo store is is used to store the session cookie in the db
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/codeial_development",
      },
      // a call back function for error management
      function (err) {
        console.log(err || "connect-mongoDb setup ok!");
      }
    ),
  })
);

// Tell app to use passport
app.use(passport.initialize());

// tell app to use passport.session the middleware we created above.
//passport. session() acts as a middleware to alter the req object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object.
app.use(passport.session());
// use set authenticated user function to set the user
app.use(passport.setAuthenticatedUser);

// Flash message is used after the session cookie is made and it requires 2 middleware:- express-session and cookie-parser
app.use(flash());
// Now to use the middleware for rendering flash message
app.use(customMware.setFlash);

// Use express routes  which contain the all routes library and it's function
app.use("/", require("./routes/indexRoute")); // or app.use('/', require('./routes/index'));

// To bind and listen the connections on the specified host and port.
app.listen(port, function (err) {
  if (err) {
    // console.log('Error in running the server: ', err);

    //using interpolation symbol(``). It is the process of embedding an expression into part of a string.
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
