import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('tb_usuario', table =>{
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('login').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('senha').notNullable();
    table.string('whatsapp').notNullable();
    table.string('foto');
    table.integer('id_grupo').unsigned().notNullable().references('id').inTable('tb_grupo');
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('tb_usuario');
}