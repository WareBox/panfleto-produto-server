import {Request,Response} from 'express';
import knex from '../database/connection';

class GrupoUsuarioController{
  //Criar Categoria
  async create(request: Request, response: Response){
    const { descricao } = request.body;
    
    const encoutrouGrupo = await knex('tb_grupousuario').select('*').first().where({ descricao })

    if (encoutrouGrupo) {
      return response.status(400).json({ message: 'Já existe um Grupo de Usuário com essa descrição!'})
    }

    const grupo = { descricao }

    await knex('tb_grupousuario').insert(grupo);

    return response.status(200).json({ message: 'Grupo de Usuário criado com sucesso!'});
  }

  //Pegar lista com todas categorias¼
  async listar(request:Request, response:Response){
    const grupos = await knex('tb_grupousuario').select('*');

    return response.json(grupos); 
  }
}

export default GrupoUsuarioController; 