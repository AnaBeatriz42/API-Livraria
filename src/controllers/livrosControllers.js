import livros from "../models/Livro.js"

class LivroControler {
     static listarLivros = (req, res) => {
          livros.find().populate('autor')
          .exec((err, livros) => {
               res.status(200).json(livros)
          })
     }

     static listarLivroId = (req, res) => {
          let id = req.params.id
          livros.findById(id).populate('autor','nome')
          .exec((err, livro) => {
               if (!err) {
                    res.status(200).send(livro)
               } else {
                    res.status(400).send({ message: `${err.message} - Id do livro não encontrado` })
               }
          })
     }

     static listarLivroEditora = (req, res) => {
          let editora = req.query.editora
          livros.find({'editora': editora}).populate('autor')
          .exec((err, livros) => {
               if (!err) {
                    res.status(200).send(livros)
               } else {
                    res.status(400).send({ message: `${err.message} - Referencia a editor não encontrado` })
               }
          })
     }


     static cadastrarLivro = (req, res) => {
          let livro = new livros(req.body)
          livro.save((err) => {
               if (err) {
                    res.status(500).send({ message: `${err.message} - Falha na tentativa de cadastrar o livro` })
               } else {
                    res.status(201).send(livro.toJSON())
               }
          })
     }

     static atualizarLivro = (req, res) => {
          let livro = req.body
          let id = req.params.id
          livros.findByIdAndUpdate(id, { $set: livro }, (err) => {
               if (!err) {
                    res.status(200).send({ message: "Livro atualizado com sucesso" })
               } else {
                    res.status(500).send({ message: `${err.message} - Falha na tentativa de atualizar o livro` })
               }
          })
     }

     static excluirLivro = (req, res) => {
          let id = req.params.id
          livros.findByIdAndDelete(id, (err) => {
               if (!err) {
                    res.status(200).send({ message: "Livro excluido com sucesso" })
               } else {
                    res.status(500).send({ message: `${err.message} - Falha na tentativa de excluir o livro` })
               }
          })
     }

}

export default LivroControler;