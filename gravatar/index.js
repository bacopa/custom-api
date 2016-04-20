"use strict";
var md5 = require("md5");


module.exports = function (params, res) {
	
	console.log(params);
	var hash = md5(params[1]);
	console.log("hash", hash);

	res.writeHead(301,
	  {Location: 'http://www.gravatar.com/avatar/' + hash}
	  );
	
	res.end();	
}

