// Requiring the express server in the main server
const express = require('express');

// Require the cookie parser
const cookieParser = require('cookie-parser');

//Firing the express server
const app = express();

//Define the port on which the server will be run
const port = 8000;

//Requiring the ejs layout library
const expressLayouts = require('express-ejs-layouts');

//Importing the database
const db = require('./config/mongoose');

//Importing the express session whuch is used for session cookie
const session = require('express-session');
//Importing the passport library it is the compulsory step for local passport
const passport = require('passport');
//Importing local passport  
const passportLocal = require('./config/passport-local-strategy');

//Middlewares

// express.urlencoded() function is a built-in middleware function in Express to read the request url
app.use(express.urlencoded());
// Now use cookie parser to read the cookies
app.use(cookieParser());
// Use the static files
app.use(express.static('./assets'));

//extracting styles and scripts from subpages
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Use the ejs layout before the routes
app.use(expressLayouts);

// Use express routes 
app.use('/', require('./routes/indexRoute')); // or app.use('/', require('./routes/index'));

//Set ejs as view engine
app.set('view engine', 'ejs');
//Set the path for views folder
app.set('views', './views'); //or app.set('views', path.join((__dirname,'views')))

// Creating session middleware that takes the session cookies and encrypts them
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployement in production mode
    secret: 'blah something',
    saveUninitialized: false,
    resave:false,
    // Need to set the time after which cookie would be expired automatically
    cookie: {
        // maxAge is in milli seconds
        maxAge: (1000 * 60 * 100)  //this is total to 100 minutes after which cookie will expire
    }
}));
// Tell app to use passport
app.use(passport.initialize());
// tell app to use passport.session
// What does passport.session () do?
//passport. session() acts as a middleware to alter the req object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object.
app.use(passport.session());

// Use express routes 
app.use('/', require('./routes')); // or app.use('/', require('./routes/index'));





// To bind and listen the connections on the specified host and port.
app.listen(port, function(err){
    if(err){
        // console.log('Error in running the server: ', err);

        //using interpolation symbol(``). It is the process of embedding an expression into part of a string.
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});