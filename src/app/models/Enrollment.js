import Sequelize, { Model } from 'sequelize';

class Enrollment extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE
      },
      {
        sequelize,
      }
    );
    return this;
  }

  // Gerando o relacionamento entre tabelas
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(model.Plan, { foreignKey: 'plan_id', as: 'plan' });
  } 
}

export default Enrollment;