import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql'
// });


const db = new Sequelize("cp_travelease", "root", "", {
  host: "localhost",
  dialect: 'mysql'
});

export default db;
