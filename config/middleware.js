// Setting a middleware for flash messages to show on the browser
module.exports.setFlash = function(req,res,next){
    res.locals.flash = {
        'success': req.flash('success'),
        'error': req.flash('error')
    }

    // It passes onto next middleware that is the browser
    next();
}