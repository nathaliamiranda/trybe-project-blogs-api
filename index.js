require('dotenv').config();

const express = require('express');

const errorMiddleware = require('./middlewares/errorMiddleware');

const user = require('./routes/users');
const login = require('./routes/login');
const category = require('./routes/categories');

const app = express();

app.use(express.json());

app.use('/user', user);

app.use('/login', login);

app.use('/categories', category);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
