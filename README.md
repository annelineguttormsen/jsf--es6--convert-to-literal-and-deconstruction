# Task

Retrieve all comments from an API and display the comments that have a postId of 1 on the page.

This should be done using **template literals** for HTML, and **parameter decontruction** in the **mapping** and **filter** functions

API URL: https://jsonplaceholder.typicode.com/comments

HTML format for each comment is:
```
<article>
    <h2>NAME</h2>
    <a href="emilto:EMAIL">EMAIL</a>
    <p>BODY</p>
    <div>Post ID: POST_ID</div>
</article>
```

**Note:** Styles are provided for you in master.css. Look in the file to find the approriate class names to use on your HTML elements.

### Example

[The example is here](https://jsf-es6-convert-to-literal-and-deconstruction.now.sh).

## Available branches

1. **Master** - Empty project. Complete the task from scratch.
2. **Skeleton** - Basic structure. The task is to fill in skeleton to match the answer.
3. **ES5** - Working answer using old sytax.  The task is to convert to ES6 syntax.
4. **Answer** - Completed answer (same as example URL)


## Steps

1. Fetch the data from the API URL.  The data is an array of comments
2. Filter out posts that don't have a postId of 1
3. Map from the objects to HTML using template literals.
4. Join the template literals together using `.join("")`.
5. Set the HTML as the innerHTML of the `#comments` `div`.
