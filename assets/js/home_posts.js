{
    // method to submit form data for new post using AJAX
    let createPost = function(){
        let newPostForm = $('#new-post-form');

        newPostForm.submit(function(e){
            // this will prevent the default submit to make submit the form as usual and we now send the post data manually
            e.preventDefault();

            // Create the ajax request to create the post
            $.ajax({
                type: 'post',
                url: '/posts/create',
                // this will serialize the data of the form in json data
                data: newPostForm.serialize(),
                success: function(data){
                    console.log(data);
                    let newPost = newPostDom(data.data.post);
                    $("#posts-list-container>ul").prepend(newPost);
                },
                error: function(err){
                    console.log(err.responseText);
                }
            });
        });
    }

    // method to create a post in DOM
    let newPostDom = function (post) {
        return $(`<li id="post-${post._id}">
                    <p>
                        <small>
                            <a class= "delete-post-button" href="/posts/destroy/${post._id}">X</a>
                        </small>
                        
                        ${post.content}
                        <br>
                        <small>
                            ${post.user.name}
                        </small>
                    </p>
                    <div class="post-comments"> 
                        <form action="/comments/create" method="post">
                            <input type="text" name="content" placeholder="Type here to add comment..." required>
                            <!-- We have to sent the comment to the post id to which we are creating this comment -->
                            <input type="hidden" name="post" value=${post._id}>
                            <input type="submit" value="Add Comment">
                        </form>
                        <div class="post-comments-list">
                            <ul id= "post-comments-${post._id}">
                            </ul>
                        </div>
                    </div>
                </li>`);
    }

    // Calling the function to create post
    createPost();
}
