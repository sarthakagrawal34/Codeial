// Requiring the express server in the main server
const express = require('express');

//Firing the express server
const app = express();

//Define the port on which the server will be run
const port = 8000;

//Requiring the ejs layout library
const expressLayouts = require('express-ejs-layouts');

// Use the static files
app.use(express.static('./assets'));

//extracting styles and scripts from subpages
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Use the ejs layout before the routes
app.use(expressLayouts);

// Use express routes 
app.use('/', require('./routes')); // or app.use('/', require('./routes/index'));

//Set ejs as view engine
app.set('view engine', 'ejs');

//Set the path for views folder
app.set('views', './views'); //or app.set('views', path.join((__dirname,'views')))


// To bind and listen the connections on the specified host and port.
app.listen(port, function(err){
    if(err){
        // console.log('Error in running the server: ', err);

        //using interpolation symbol(``). It is the process of embedding an expression into part of a string.
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});