import express from "express"
import AutorControler from "../controllers/autoresControllers.js"

const router = express.Router();

router
     .get("/autores", AutorControler.listarAutores)
     .get("/autores/:id", AutorControler.listarAutorId)
     .post("/autores", AutorControler.cadastrarAutor)
     .put("/autores/:id", AutorControler.atualizarAutor)
     .delete("/autores/:id", AutorControler.excluirAutor)

export default router;