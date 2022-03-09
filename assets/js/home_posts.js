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
                },
                error: function(err){
                    console.log(err.responseText);
                }
            });
        });
    }

    // method to create a post in DOM

    // Calling the function to create post
    createPost();
}
