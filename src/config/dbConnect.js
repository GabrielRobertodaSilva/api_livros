import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Gabriel:12345@projetofinal.3kej3.mongodb.net/ProjetoFinal");

let db = mongoose.connection;

export default db;