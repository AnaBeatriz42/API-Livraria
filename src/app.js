import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

//db.on = metodo de inicialização com tratamento de erro
db.on("error", console.log.bind(console,"Erro de conexão"))

//db.once = abre a conexão
db.once("open", () => {
      console.log("Conexão com o banco feita com sucesso ")
})

const app = express() // criando uma isntancia do express
app.use(express.json()) // transforma tudo que esta sendo recebido por requisição em json para permitir manipulação dos dados 

routes(app); // chamando todas as rotas passando o app como propriedade 


/* A função findIndex é um método embutido em arrays JavaScript que é usado 
para encontrar o índice do primeiro elemento em um array que satisfaça uma
determinada condição.  */

export default app;