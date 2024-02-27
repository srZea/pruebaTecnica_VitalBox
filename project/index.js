import router from './routes/routes';
import morgan from 'morgan';
import express from 'express';
//const path = require('path');
require('dotenv').config()
//creación app express
const app = express();
const PORT = 4000;

//midleware 
app.use(morgan('dev'));
app.set('view engine','ejs');
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.use(express.static(__dirname + '/public'))

app.use("/data", router)
app.get('/', (req, res) => res.render('./public/views/index.ejs'));



app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);