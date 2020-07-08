import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('tb_grupo').insert([
    { descricao: 'Admnistrador'},
    { descricao: 'Usuario'},
  ]);
}