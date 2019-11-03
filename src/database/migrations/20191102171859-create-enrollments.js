module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enrollments', { 
      /**
       * Colunas principais da tabela (sem relacionamento)
       */
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      
      /**
       * Colunas da tabela com relacionamento  (chave estrangeira)
       */

       student_id: {
         type: Sequelize.INTEGER,
         references: { model: 'students', key: 'id' },
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL',
         allowNull: true
       },

       plan_id: {
         type: Sequelize.INTEGER,
         references: { model: 'plans', key: 'id' },
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL',
         allowNull: true
       },

       /**
        * Colunas referente a data de criação e atualização das informações
        */
       created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },


    });

  },

  down: (queryInterface,) => {
    return queryInterface.dropTable('enrollments');
  }
};
