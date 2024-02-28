'use strict';

const { LISTA_TABLE } = require('../models/lista.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(LISTA_TABLE, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fecha: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      },
      obgetivo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },  
      nombreApellido: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      Documento: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      planta: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      contratista: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      otro: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      dependencia: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      correoElectronico: {
        type: Sequelize.DataTypes.EMAIL,
        allowNull: false
      },
      telefono: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      grabacion: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      firma: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER
      },
      lugar: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('listas');
  }
};
