//Exporting module to browser when the route request this controller
module.exports.profile = function(req,res){
    res.end('<h1>User Profile</h1>');
};

//Adding another action for about
module.exports.about = function(req,res){
    res.end('<p>User about Section</p>')
}