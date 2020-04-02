const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);


//Métodos HTTP:

// Get: Buscar Informação do back-end
//Post: Criar uma informação no back
//Put: Alterar uma informação no back
//Delete: Deletar uma informação no back


// Tipos de parâmetros

// Query Params: Parametros nomeados enviado na rota após "?" (Filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisção , utilizado 



app.listen(3333);
