//Exporting module to browser when the route request this controller
module.exports.profile = function(req,res){
    res.end('<h1>User Profile</h1>');
}