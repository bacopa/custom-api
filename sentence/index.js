"use strict";

module.exports = function (params, res) {

	params.shift()//remove "words"
	console.log("params:", params);
	
	var wordCount = params.length;
	console.log("wordCount", typeof wordCount);
	
	var total = 0;

	for(var i = 0; i < params.length; i++){
		total += params[i].length;
	}
	var avgWordLength = total / wordCount;


	var info = "Word Count: " + wordCount + "\n" + "Character Count: " + total + "\n" + "Average Word Length: " + avgWordLength + "\n"; 

	res.write(info.toString());
	res.end("\n")
}