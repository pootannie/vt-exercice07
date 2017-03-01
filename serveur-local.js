var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	fs.readFile('fichier.json', function (err, data) {
		data = JSON.parse(data);

		if (err) {
			return console.error(err)
		}else{
			var tableauAffiche = "<table border=1>";

			for(index in data) {
				tableauAffiche += "<tr>";
				tableauAffiche += "<td>" + data[index] + "</td>" //affiche la valeur de l'index
				tableauAffiche += "<td>" + index + "</td>" //affiche l'index associe au data
				tableauAffiche += "</tr>";
			}
			tableauAffiche += "</table>";

			response.write(tableauAffiche)
		response.end();
		}
	})
}).listen(3000); //affiche sur localhost:3000