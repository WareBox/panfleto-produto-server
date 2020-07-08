import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('tb_grupo', table => {
        table.increments('id').primary();
        table.string('descricao').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_grupo');
}