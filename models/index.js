const { Sequelize } = require('sequelize');

// Konfigurasi koneksi Sequelize
const sequelize = new Sequelize('sql12721728', 'sql12721728', 'arGTF85nGR', {
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql',
    dialectOptions: require('mysql2')
});

// Uji koneksi
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Ekspor instance sequelize untuk digunakan di tempat lain
module.exports = sequelize;