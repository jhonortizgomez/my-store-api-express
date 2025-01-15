const { Client } = require('pg');

const getPostgresConnection = async() => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'jhon',
    password: 'admin123',
    database: 'my_store',
  });

   await client.connect();
  return client;
}

module.exports = getPostgresConnection;
