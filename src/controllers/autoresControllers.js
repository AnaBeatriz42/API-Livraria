import autores from "../models/Autor.js"

class AutorControler {
     static listarAutores = (req, res) => {
          autores.find((err, autores) => {
               res.status(200).json(autores)
          })
     }

     static listarAutorId = (req, res) => {
          let id = req.params.id
          autores.findById(id, (err, autor) => {
               if (!err) {
                    res.status(200).send(autor)
               } else {
                    res.status(400).send({ message: `${err.message} - Id do autor não encontrado` })
               }
          })
     }

     static cadastrarAutor = (req, res) => {
          let autor = new autores(req.body)
          autor.save((err) => {
               if (err) {
                    res.status(500).send({ message: `${err.message} - Falha na tentativa de cadastrar o autor` })
               } else {
                    res.status(201).send(autor.toJSON())
               }
          })
     }

     static atualizarAutor = (req, res) => {
          let autor = req.body
          let id = req.params.id
          autores.findByIdAndUpdate(id, { $set: autor }, (err) => {
               if (!err) {
                    res.status(200).send({ message: "autor atualizado com sucesso" })
               } else {
                    res.status(500).send({ message: `${err.message} - Falha na tentativa de atualizar o autor` })
               }
          })
     }

     static excluirAutor = (req, res) => {
          let id = req.params.id
          autores.findByIdAndDelete(id, (err) => {
               if (!err) {
                    res.status(200).send({ message: "autor excluido com sucesso" })
               } else {
                    res.status(500).send({ message: `${err.message} - Falha na tentativa de excluir o autor` })
               }
          })
     }

}

export default AutorControler;