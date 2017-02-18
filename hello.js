var http = require("http");

var manejador = function(solicitud, respuesta){
  console.log("Hello World");
  respuesta.end("Hello World!");
}

var servidor = http.createServer(manejador);

servidor.listen(3000);
