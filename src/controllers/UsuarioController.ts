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
     where('login',login).andWhere('senha',senha);
      
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

// encrypt(text: string){
//   const crypto = require('crypto'),
//     algorithm = 'aes-256-ctr',
//     password = 'd6F3Efeq';

//   var cipher = crypto.createCipher(algorithm,password)
//   var crypted = cipher.update(text,'utf8','hex')
//   crypted += cipher.final('hex');
//   return crypted;
// }//Criptofrafa
 
//  decrypt(text: string){
//   const crypto = require('crypto'),
//   algorithm = 'aes-256-ctr',
//   password = 'd6F3Efeq';

//   var decipher = crypto.createDecipher(algorithm,password)
//   var dec = decipher.update(text,'hex','utf8')
//   dec += decipher.final('utf8');
//   return dec;
// }//Descriptografa

}

export default UsuarioController;