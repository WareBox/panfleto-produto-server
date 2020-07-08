import  Knex  from 'knex';

export async function seed(knex: Knex){
  await knex('tb_produto').insert([
    {
     nome: 'Produto Exemplo', 
     descricao: 'Descrição do produto exemplo',
     unidade: "Kg",
     preco: 10.00,
     foto: 'ProdutoExemplo.png',
     disponivel: true,
     id_categoria: 1
    }
  ]);  
}