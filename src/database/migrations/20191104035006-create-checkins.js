module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('checkins', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      /**
       * Create foreign Key to student table
       */
      student_id: {
        type: Sequelize.INTEGER,
        references: { model: 'students', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      /**
       * Commum columns to create and update dates
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
    return queryInterface.dropTable('checkins');
   
  }
};
