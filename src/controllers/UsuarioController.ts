import {Request,Response} from "express";
import knex from "../database/connection";

class UsuarioController{
  async create(request: Request,response: Response){
     const {
        nome,
        senha,
        login,
        email,
        whatsapp,
        foto,
        id_grupo
     } = request.body;

     const usuario = {
      nome,
      senha,
      login,
      email,
      whatsapp,
      foto,
      id_grupo
     };
     await knex('tb_usuario').insert(usuario);
  }//Criação do usuário

  async auth(request:Request,response:Response){
    const {
      login,
      senha,
    } = request.body;

     const auth = await knex('tb_usuario').
     select('id','login').
     where('login',login).
     andWhere('senha',senha);
      
     if(auth[0] == null){
      return response.json({return:false});
     }
     else{
     return response.json(auth);
    }
  }//Autenticação de Login

  async listar(request:Request,response:Response){
    const id = 1;

    const usuarios = await knex('tb_usuario').select('*').where('id',id);

    return response.json(usuarios);
  }//Listar usuários
}

export default UsuarioController;