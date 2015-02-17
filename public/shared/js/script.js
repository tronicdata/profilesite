console.log("Hello, World");
var xmlhttp;
if (window.XMLHttpRequest){
	// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
} else {
	// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET", "https://larrybuffaloboy.wordpress.com/posts", true);
xmlhttp.send();

$(document).ready(function(){
	console.log("hello, ready");

})
