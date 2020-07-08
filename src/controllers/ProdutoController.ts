import {Request,Response} from 'express';
import knex from '../database/connection';

class ProdutoController{
  //Criar Produto
  async create(request: Request, response: Response){
    const {
      nome,
      descricao,
      unidade,
      preco,
      foto,
      disponivel,
      id_categoria
    } = request.body;
  
    const produto = {
      nome,
      descricao,
      unidade,
      preco,
      foto,
      disponivel,
      id_categoria
    };

    await knex('tb_produto').insert(produto);
    
    const produto_id = await knex('tb_produto')
    .select('id')
    .first()
    .orderBy('id','desc');
  }

  //Pegar lista com todos Produtos
  async listar(request:Request, response:Response){
    const produtos = await knex('tb_produto').select('*');

    const serializedItems = produtos.map(produtos => {
      return{
        id: produtos.id,
        nome: produtos.nome,
        preco: produtos.preco,
        descricao: produtos.descricao,
        disponivel: produtos.disponivel,
        unidade: produtos.unidade,
        image_url: `http://localhost:3333/uploads/${produtos.foto}`,
      };
    });
    return response.json(serializedItems); 
  }
}

export default ProdutoController; 