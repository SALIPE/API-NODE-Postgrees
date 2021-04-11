'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_estoques',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      prod_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'tb_produtos', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
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
