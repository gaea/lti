require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'ats_user',
    password: process.env.DB_PASSWORD || 'ats_password',
    database: process.env.DB_NAME || 'ats_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USER || 'ats_user',
    password: process.env.DB_PASSWORD || 'ats_password',
    database: process.env.DB_NAME || 'ats_test_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
}; 