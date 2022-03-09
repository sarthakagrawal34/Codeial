// Requiring the comments schema
const Comment = require("../models/comment");

// Requiring the post schema
const Post = require("../models/post");

//Exporting module to browser when the route request create controller
module.exports.create = async function (req, res) {
  try {
    // Find the post that does it exist or not when the user is creating the comment
    let post = await Post.findById(req.body.post);

    // If the post is found create the comment for it
    if (post) {
      let comment = await Comment.create({
        content: req.body.content,
        post: req.body.post,
        // storing the signed-in user's id
        user: req.user._id,
      });
      // If successfully created the comment then add the comment to the post
      post.comments.push(comment);
      // Save the comment
      post.save();
      
      if (req.xhr) {
        // Similar for comments to fetch the user's id!
          comment = await comment.populate("user", "name");

        return res.status(200).json({
          data: {
            comment: comment,
          },
          message: "Comment created!",
        });
      }

      // Using flash message too show that the comment is created
      req.flash("success", "Comment Created!");

      // Redirecting to home page
      res.redirect("/");
    }
  } catch (err) {
    // console.log('Error', err);
    req.flash("error", err);
    return;
  }
};

// Creating action for deleting the comments made on the post
module.exports.destroy = async function (req, res) {
  try {
    // first of all find that the comment deleting exists or not
    let comment = await Comment.findById(req.params.id);
    // if the one who is deleting the comment is the owner of the comment
    if (comment.user == req.user.id) {
      // Store the id of the post in which the comment is deleting as we have to later delete the comment from the post also
      let postId = comment.post;
      // if founded the comment to be deleted
      comment.remove();
      // Now delete the comment id from the post's comment array so we use update as we have to update the comment array in the post
      let post = Post.findByIdAndUpdate(postId, {
        $pull: { comment: req.params.id },
      });

      console.log("*******", req.xhr);
      // send the comment id which was deleted back to the views
      if (req.xhr) {
        return res.status(200).json({
          data: {
            comment_id: req.params.id,
          },
          message: "Comment deleted",
        });
      }
      // Using flash message too show that the comment is deleted
      req.flash("success", "Comment Deleted!");

      // if successful
      return res.redirect("back");
    } else {
      // Using flash message to show that the comment can't be deleted
      req.flash("error", "You can not delete the comment");
      // if the comment deleting user is not the owner of the comment
      return res.redirect("back");
    }
  } catch (err) {
    // console.log('Error', err);
    req.flash("error", err);
    return;
  }
};
