import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'password',
      database : 'PanfletoProduto',
      options: {
      'encrypt': true,
      'enableArithAbort': true
      }
  },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
}