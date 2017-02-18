function render(html, variables){

  //Variables en un array
  for (var i = variables.length - 1; i >= 0; i--) {
    //var value = eval(variables[i]);
    var variable =variables[i];
    //Obtenemos el valor de la variable
    //reemplazamos
    html_string = html_string.replace("{" + variables[i] + "}", parametros[variable]);
  };

}

module.exports.render = render;
