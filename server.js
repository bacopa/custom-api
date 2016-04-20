"use strict";

var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {

	var params = req.url.split("/")
	params.shift(); //remove first empty string
	var resource = params;
	console.log("resource",resource);
	console.log("params", params);
	switch(resource[0]){

		case "add":
		case "sub":
		case "mult":
		case "div":
		case "expo":
			require("./math")(params, res);
			break;

		case "words":
			require("./sentence")(params, res)
			break;

		case "gravatar":
			require("./gravatar")(params, res);
			break;

		case "born":
			require("./age")(params, res);
			break;

		default:

			var startPage = fs.readFileSync("index.html");
			res.end( startPage.toString() );


	} //close switch

});//close server

server.listen(8000, function (err) {
	if(err) {
		return console.log("Error:", err);
	}
	console.log("Running on port: 8000." )
});