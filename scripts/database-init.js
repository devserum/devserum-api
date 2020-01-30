const consola = require('consola');
const { Client } = require('pg');

const env = require('../config/config');

const client = new Client({
  host: env.PSQL_HOST,
  port: env.PSQL_PORT,
  user: env.PSQL_USERNAME,
  password: env.PSQL_PASSWORD,
  database: 'postgres',
});

const createDBQuery = `CREATE DATABASE ${env.PSQL_DATABASE}`;

(async () => {
  await client.connect()
    .then(() => consola.info('INIT pg connect success'))
    .catch((err) => consola.info(err));
  
  await client.query(createDBQuery)
    .then(() => consola.info(`successfully create database "${env.PSQL_DATABASE}"`))
    .catch(() => consola.info(`database "${env.PSQL_DATABASE}" already exist`))
    .then(() => {
    });
  
  client.end();
})();
