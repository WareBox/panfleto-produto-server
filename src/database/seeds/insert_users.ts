import  Knex  from 'knex';

export async function seed(knex: Knex){
  await knex('tb_usuario').insert([
    { 
    nome: 'admnistrador',
    login: 'warebox',
    email: 'warebox@gmail.com',
    senha: 'warebox123.',
    whatsapp: '15998442471',
    foto: '',
    id_grupo: 1
    }
  ]);
  await knex('tb_usuario').insert([
    { 
    nome: 'usuario teste',
    login: 'usuarioteste',
    email: 'warebox@gmail.com',
    senha: 'usuarioteste123.',
    whatsapp: '15998442471',
    foto: '',
    id_grupo: 2
    }
  ]);
}
