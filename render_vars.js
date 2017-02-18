var http = require("http"),
  fs = require("fs");

http.createServer(function(req, res){
  fs.readFile("./index.html", function(err, html){

    var html_string = html.toString();

    //Expresion regular, que busca en el HTML donde haya x
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = "Maria";


    //Variables en un array
    for (var i = variables.length - 1; i >= 0; i--) {
      var value = eval(variables[i]);
      //Obtenemos el valor de la variable
      //reemplazamos
      html_string = html_string.replace("{" + variables[i] + "}", value);
    };

    //Printamos
    res.writeHead(200, {"Content-type" : "text/html"})
    res.write(html_string);
    res.end();
  });

}).listen(8081);
