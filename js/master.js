// request api data
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(resp => resp.json())
    .then(handleAPIResponse);

// handle the JSON returned by the API
function handleAPIResponse(comments) {
    // see what comments are being returned
    console.log(comments);
    
    // only get comments from post 1
    const filteredComments = comments.filter(function(comment) {
        /**
         * TASK 1
         * filter out comments that dont have .postId of 1
         */ 
        return true;
    });
    // map data to HTML
    const htmlArray = filteredComments.map(function(comment) {
        /**
        * TASK 2
        * create HTML from comment object using a tempate literal
        */ 
        return ``;
    });
    /**
     * TASK 3
     * Pass an empty string to join() so that the HTML gets together with no separator
     * By default join() will separate items with a comma 
     */ 
    const html = htmlArray.join();

    // set the HTML into the page
    document.getElementById("comments").innerHTML = html;
}