//Defining action name and it's function
    // module.exports.actionName=function(req,res){}

//Exporting module to browser when the route request this controller
module.exports.home=function(req,res)
{
    res.end('<h1>Express is up for Codeial!</h1>');
}
