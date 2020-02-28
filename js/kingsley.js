// request api data
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(resp => resp.json())
    .then(handleAPIResponse);

// handle the JSON returned by the API
function handleAPIResponse(data) {
	console.log(data);

	const filterArray = data.filter(({postId})=>postId==1);
	console.log(filterArray);

	let htmlArray = filterArray.map(({name, email, body, postId})=> {
		return `
			<article>
			<h2>${name}</h2>
			<a href="emilto:${email}">${email}</a>
		    <p>${body}</p>
		    <div>Post ID: ${postId}</div>
		    </article>
		`;
	});
	console.log(htmlArray);
	htmlArray = htmlArray.join(" ");
	console.log(htmlArray);

	const commentDiv = document.getElementById("comments");

	commentDiv.innerHTML = htmlArray;
}