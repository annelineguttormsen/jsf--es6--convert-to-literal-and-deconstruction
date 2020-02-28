const $body = $("body");

//lag XHR basert på om det er i IE eller ikke
if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
} else {
    //hvis IE bruk activex
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

//url er bare et eksempel, HUSK HTTPS, ikke HTTP
var url = "https://jsonplaceholder.typicode.com/comments";
//sett opp data til global variabel
var data;

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(xhr.responseText);
        //eventuelle funksjoner dette skal utføre
        const mappedArray = $.map(data,function({postId, name, email, body}) {
			if (postId == 1) return {postId, name, email, body};
		});
		console.log(mappedArray);
        for (let i in mappedArray) {
        	$body.append();
        }
    } else {
        console.log("Fil ikke funnet 404");
    }
}
//true står for om det er asynchronous eller ikke
xhr.open("GET",url,true);
xhr.send();