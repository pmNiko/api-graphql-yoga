/*
  Este es el archivo principal del backend
  se encarga de importar los archivos necesarios 
  para crear y configurar la funcionalidad del server.
*/

// modulo que permite crear una instancia del server
import { server } from "./server";
// modulo que ejecuta la conexión a la BD
import "./database";

// da inicio al server indicando el puerto de entrada
server.start({ port: 3100 }, ({ port }) => {
  console.log("Server on port", port);
});
