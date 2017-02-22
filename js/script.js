// $.get("https://congress.api.sunlightfoundation.com/legislators?apikey=0e85724a8f924c6aba8bd576df364eb7&callback=?", "jsonp")
// 	.then(data=>console.log(data))

$.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=12")
	.then(data=>console.log(data))