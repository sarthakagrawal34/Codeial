const Post = require("../../../models/post");
const Comment = require("../../../models/comment");

module.exports.index = async function (req, res) {
  let posts = await Post.find({})
    .sort("-createdAt")
    .populate("user")
    // populating the comments so as to display the content and user of the comment
    .populate({
      path: "comments",
      // populating the user of the comment
      populate: {
        path: "user",
      },
    });

  return res.json(200, {
    message: "List of Posts",
    posts,
  });
};

module.exports.destroy = async function (req, res) {
    try {
        let post = await Post.findById(req.params.id);
        post.remove();
        // delete the comment also of the same post and making it a await request
        await Comment.deleteMany({ post: req.params.id });
            return res.json(200, {
            message: "Post and associated comments deleted successfully",
        });
    }
    catch (err) {
        return res.json(500, {
            message: "Internal server error",
        });
    }
};
