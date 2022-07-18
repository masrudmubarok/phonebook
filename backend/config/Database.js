import {Sequelize} from "sequelize";

const db = new Sequelize('phonebook','masrud','masrud',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;