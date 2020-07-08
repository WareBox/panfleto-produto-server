import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('tb_produto', table =>{
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('descricao');
    table.string('unidade').notNullable();
    table.decimal('preco').notNullable();
    table.string('foto').notNullable();
    table.boolean('disponivel').notNullable().defaultTo(true);
    table.integer('id_categoria').unsigned().notNullable().references('id').inTable('tb_categoria');
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('tb_produto');
}