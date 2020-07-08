import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('tb_pedido_produto', table =>{
      table.increments('id');
      table.integer('id_pedido').unsigned().references('id').inTable('tb_pedido');
      table.integer('id_produto').unsigned().references('id').inTable('tb_produto');
      table.float('preco').notNullable();
      table.float('quantidade').notNullable();
    });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('tb_pedido_produto');
}