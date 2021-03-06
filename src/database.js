/*
  Este modulo es el encargado de la conexión
  a la base de datos a través de mongoose.
*/
import mongoose from "mongoose";
mongoose.set("useFindAndModify", false);

async function connect() {
  await mongoose
    .connect("mongodb://localhost/graphqlreactdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("Database is connected!"))
    .catch((err) => console.log("Error: ", err));
}

connect();
