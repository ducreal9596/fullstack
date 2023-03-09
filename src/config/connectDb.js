const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ducreal', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});
const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('connection established successfully');
    } catch (error) {
        console.log('Unable to connect', error);
    }
};
module.exports = connectDb;
