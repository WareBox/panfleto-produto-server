import knex from 'knex';

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'PanfletoProduto'
  }
  
});

export default connection;