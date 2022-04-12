require('dotenv').config();

const express = require('express');

const errorMiddleware = require('./middlewares/errorMiddleware');

const user = require('./routes/users');

const app = express();

app.use(express.json());

app.use('/user', user);

// daqui pra baixo as rotas estarão autenticadas
// app.use(authMiddleware); 

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
