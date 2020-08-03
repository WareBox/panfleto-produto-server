import {Request,Response} from 'express';
import knex from '../database/connection';

class CategoriaController{
  //Criar Categoria
  async create(request: Request, response: Response){
    const { descricao } = request.body;
    
    const encoutrouCategoria = await knex('tb_Categoria').select('*').first().where({ descricao })

    if (encoutrouCategoria) {
      return response.status(400).json({ message: 'Já existe uma categoria com essa descrição!'})
    }

    const categoria = { descricao }

    await knex('tb_Categoria').insert(categoria);

    return response.status(200).json({ message: 'Categoria criada com sucesso!'});
  }

  //Pegar lista com todas categorias¼
  async listar(request:Request, response:Response){
    const categorias = await knex('tb_Categoria').select('*');

    return response.json(categorias); 
  }
}

export default CategoriaController; 