/*
  Este es el resolver de las Mutations 
*/

import Message from "../../models/Message";

const Mutation = {
  // resolver asincrono que inserta un nuevo Message a la BD
  createMessage: async (_, { title, content, author }) => {
    const newMessage = new Message({ title, content, author });
    return await newMessage.save();
  },
};

export default Mutation;
