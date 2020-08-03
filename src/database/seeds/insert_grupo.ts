import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('tb_grupousuario').insert([
    { descricao: 'Admnistrador'},
    { descricao: 'Usuario'},
  ]);
}