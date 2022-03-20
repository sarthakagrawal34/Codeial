const nodemailer = require('../config/nodemailer');


// This is another way of exporting module
exports.newComment = (comment) => {
    let htmlString = nodemailer.renderTemplate({comment:comment}, '/comments/new_comment.ejs')

    nodemailer.transporter.sendMail({
        from: 'agrawal.sarthak2599@gmail.com',
        to: comment.user.email,
        subject: "New comment Published",
        html: htmlString
    }, (err, info) => {
        if (err) {
            console.log("Error in sending mail", err);
            return;
        }

        console.log("Message sent", info);
        return;

    });
}