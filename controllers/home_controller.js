//Defining action name and it's function
    // module.exports.actionName=function(req,res){}

//Exporting module to browser when the route request this controller
module.exports.home=function(req,res)
{
    // res.end('<h1>Express is up for Codeial!</h1>');
    console.log(req.cookies);
    res.cookie('user_id',29);
    // Now use home.ejs file for rendering
    return res.render('home', {
        title: "Home"
    });
}


// Another action for home controller
module.exports.settings = function(req,res){
    res.end('<a href="#">Home Setting</a>');
}