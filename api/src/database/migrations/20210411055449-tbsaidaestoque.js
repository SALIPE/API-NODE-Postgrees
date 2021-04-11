'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_saida_estoque',{
      codigo_saida:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cod_estoque:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cod_produto:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      desc_prod:{
        type: Sequelize.STRING ,
        allowNull: false,
      },
      qtd_saida:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_saida:{
        type: Sequelize.DATE,
        allowNull: false,
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
