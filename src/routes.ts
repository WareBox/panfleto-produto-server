import express, { request, response } from "express";

import CategoriaController from './controllers/CategoriaController';
import ProdutoController from './controllers/ProdutoController';
import UsuarioController from './controllers/UsuarioController';

const routes = express.Router();

const categoriaController = new CategoriaController();
const produtoController = new ProdutoController();
const usuarioController = new UsuarioController();

routes.get('/usuarios', usuarioController.listar);
routes.post('/usuarios', usuarioController.create);
routes.post('/auth', usuarioController.auth);

routes.post('/produtos', produtoController.create);
routes.get('/produtos', produtoController.listar);

routes.post('/categorias', categoriaController.create);
routes.get('/categorias', categoriaController.listar);

routes.post('/login',usuarioController.auth);



export default routes;