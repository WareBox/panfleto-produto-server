import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('tb_pedido', table =>{
    table.increments('id');
    table.integer('id_usuario').unsigned().references('id').inTable('tb_usuario');
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('tb_pedido');
}