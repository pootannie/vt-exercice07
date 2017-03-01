var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {  
	fs.readFile('fichier.json', function (err, data) {
		if (err) {
			return console.error(err)
		}else{
			response.write(data.toString());
		};
		
		response.end();
	});
}).listen(8081);