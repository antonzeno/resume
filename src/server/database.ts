import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('resume_rocket', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;