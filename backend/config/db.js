// backend/config/db.js
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.getConnection()
  .then(() => console.log(' Connexion à la base de données réussie'))
  .catch((err) => console.error(' Erreur de connexion à la base de données:', err));

module.exports = db;
