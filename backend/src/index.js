const express = require('express')
const cors =require('cors')

const routes =require('./routes')

const app = express()

app.use(cors())
app.use(express.json()) // para dizer ao express que utilizaremos a requisição do body em formato json
app.use(routes)

/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após '?' (Filtros, paginação)
 * Route Params: Parâmetros utilizados para indentificar recursos
 * Request body: Corpo da requisição (criar ou alterar recursos)
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()...
 */


app.listen(3333)