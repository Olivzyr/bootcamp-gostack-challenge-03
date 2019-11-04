import Sequelize, { Model } from 'sequelize';


class Checkin extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );

    return this;
  }

  // Connection between tables
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
  }

}

export default Checkin;