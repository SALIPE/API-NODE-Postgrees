'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_produtos',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      prod_descricao:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      prod_marca:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      prod_nome_peca:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      prod_modelo_peca:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
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
