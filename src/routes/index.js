// Concentra todas as rotas que existe no servidor

import express from "express";
const router = express.Router();
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routers = (app) => {
     router.get("/", (req, res) => {
          res.status(200).send('API - Livraria')
     })

     app.use(
          express.json(),
          livros,
          autores
     )
}

export default routers