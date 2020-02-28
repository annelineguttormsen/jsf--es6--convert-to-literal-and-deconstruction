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
        return comment.postId === 1;
    });
    // map data to HTML
    const htmlArray = filteredComments.map(function(comment) {
        return '<article>' +
                    '<h2>' + comment.name + '</h2>' +
                    '<a href="emilto:' + comment.email + '">' + comment.email + '</a>' +
                    '<p>' + comment.body + '</p>' +
                    '<div>Post ID: ' + comment.postId + '</div>' +
                '</article>';
    });
    // join the HTML into a single string
    const html = htmlArray.join("");

    // set the HTML into the page
    document.getElementById("comments").innerHTML = html;
}