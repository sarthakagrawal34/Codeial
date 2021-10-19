//Exporting module to browser when the route request this controller
module.exports.post = function(req,res){
    res.end('<h1>User Post</h1>');
}