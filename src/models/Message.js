/*
    Este modulo crea un modelo de datos que será 
    posteriormente guardado o consultado a la BD a través de la
    definición de un Schema.
*/
import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export default model("Message", messageSchema);
