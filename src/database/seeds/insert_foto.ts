import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('tb_foto').insert([
    { descricao: 'Teste'}
  ]);
}