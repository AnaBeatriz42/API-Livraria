import express from "express"
import LivroControler from "../controllers/livrosControllers.js"

const router = express.Router();

router
     .get("/livros", LivroControler.listarLivros)
     .get("/livros/busca", LivroControler.listarLivroEditora)
     .get("/livros/:id", LivroControler.listarLivroId)
     .post("/livros", LivroControler.cadastrarLivro)
     .put("/livros/:id", LivroControler.atualizarLivro)
     .delete("/livros/:id", LivroControler.excluirLivro)

export default router;