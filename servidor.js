// servidor.js
var http=require("http");
var puerto=8888;

function funcionalidad(solicitud,respuesta)
{
    respuesta.writeHead(200,{'Content':"text/html"});
    respuesta.write('<h1>Soy Idalikg y estoy aprendiendo node.js</h1>');
    respuesta.end();
}
var servidorCorriendo=http.createServer(funcionalidad);

servidorCorriendo.listen(puerto);

console.log("EL SEVIDOR ESTA CORRIENDO EN EL PUERTO: " + puerto);
