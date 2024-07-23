const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const bcrypt = require('bcryptjs');

const Student= sequelize.define ('student', {
        student_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kelas: {
            type: DataTypes.STRING,
            allowNull: false
        }, tempat_lahir: {
            type: DataTypes.STRING,
            allowNull: false
        }, tanggal_lahir: {
            type: DataTypes.DATE,
            allowNull: false
        }, phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, alamat: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    });
module.exports = Student;
