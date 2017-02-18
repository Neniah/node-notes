var http = require("http"),
  fs = require("fs"),
  parser =require("./params_parser.js");

var p = parser.parse;

http.createServer(function(req, res){

  if(req.url.indexOf("favicon.ico") > 0){ return;}

  fs.readFile("./index.html", function(err, html){

    var html_string = html.toString();
    var arreglo_parametros = [];
    var parametros =new Object();

    //Expresion regular, que busca en el HTML donde haya x
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = "Maria";

    var parametros = p(req);






    //Printamos
    res.writeHead(200, {"Content-type" : "text/html"})
    res.write(render(html_string, parametros));
    res.end();
  });

}).listen(8083);
