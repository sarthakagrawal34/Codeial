// Requiring the express server in the main server
const express = require('express');

//Firing the express server
const app = express();

//Define the port on which the server will be run
const port = 8000;

// use express routes 
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