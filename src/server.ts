import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.all('/', function(req, res, next) {
  res.header("Access-Control-Expose-Headers", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers","GET,POST,PUT");
  next();
 });

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);