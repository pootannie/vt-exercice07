var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	fs.readFile('fichier.json', function (err, data) {
		if (err) {
			return console.error(err)
		}else{
			var tableauAffiche = "<table border=1>";

			for(var i=0; i<data.length; i++) {
				tableauAffiche += "<tr>";
				tableauAffiche += "<td>" + data[i] + "</td>"
				tableauAffiche += "</tr>";
			}
			tableauAffiche += "</table>";

			response.write(tableauAffiche)
		response.end();
		}
	})
}).listen(8081);

var data = fs.readFileSync('fichier.json');