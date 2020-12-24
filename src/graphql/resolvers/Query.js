/*
  Este es el resolver de las Queries de la API 
*/
import Messages from "../../models/Message";

const Query = {
  // resolver de prueba
  ping() {
    return "pong!";
  },
  // resolver asincrono que devuelve el array de Messages
  messages: async () => {
    return await Messages.find();
  },
};

export default Query;
