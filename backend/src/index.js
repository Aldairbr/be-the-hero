const express = require('express'); //
const cors = require('cors');
const routes = require('./routes.js') //""./" está referenciando a mesma pasta do arquivo index.js

const app = express(); 


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * ROTA / RECURSO
 */

/** 
*Metodos HTTP: 

*GET: Buscar/Listar uma informação do backend
*POST: Criar uma informação no backend
*PUT: Alterar uma informação no backend
*DELETE: Deletar uma informação no backend
*/

/**
 * Tipos de Parâmetros
 * 
 * Query params: Parâmetros enviados na rota após o simbolo de "?"   (Geralmentoe servem para Filtros, Paginação)
 * Route params: Parêmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado par criar ou alterar recursos
 */

/**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server...
  * NoSQL: MondoDB, couchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*).where()
*/

// ouvidor com porta '3333' que é a padrão para execução do node.js
