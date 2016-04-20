"use strict";

module.exports = function(params, res) {

	console.log("Math is Fun!");
	var operation = params.shift();
	console.log(operation);

	var result;

	switch(operation){

		case "add":

			result = params.reduce(function (sum, x) {
				return sum += Number(x);
			}, 0)
			break;

		case "sub":

			result = params.reduce(function (param0, x) {
				return param0 -= Number(x);
			}, Number(params[0]) + Number(params[0]))
			break;

		case "mult":
			result = params.reduce(function (product, x) {
				return product *= Number(x);
			}, 1);
			break

		case "div":
			result = params[0]/params[1];
			if(params.length > 1){ 
				result += "...I'm only going to divide once.";

			};
			break;

		case "expo":
			result = Math.pow(params[0], params[1]);
			result += "...I'm only looking at the first two numbers, dude.";
			break;

	} //close switch
	res.write(result.toString());
	res.end("\n");
}