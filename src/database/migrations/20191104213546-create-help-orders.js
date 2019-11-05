'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('help_orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      question: {
        type: Sequelize.STRING,
      },
      answer: {
        type: Sequelize.STRING,
      },
      answer_at: {
        type: Sequelize.DATE,
        allowNull: true
      },

      /**
       * Foreign Key Student
       */
      student_id: {
        type: Sequelize.INTEGER,
        references: { model: 'students', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },


      /**
       * Date begin and end
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

  down: (queryInterface) => {
    return queryInterface.dropTable('help_orders');
  }
};
