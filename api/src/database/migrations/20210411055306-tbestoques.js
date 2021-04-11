'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_estoque',{
      codigo_estoque:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cod_prod:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      desc_prod:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      setor:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
