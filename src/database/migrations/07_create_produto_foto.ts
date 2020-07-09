import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('tb_foto_produto', table =>{
      table.increments('id');
      table.integer('id_foto').unsigned().references('id').inTable('tb_foto');
      table.integer('id_produto').unsigned().references('id').inTable('tb_produto');
    });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('tb_foto_produto');
}