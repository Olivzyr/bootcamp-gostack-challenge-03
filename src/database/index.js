// Criando o Loader para os models
import Sequelize from 'sequelize';

// Importando arquivo responsável pela manipulação das informações do banco para
// cada usuário
import User from '../app/models/User';
import Student from '../app/models/Student';
import Plan from '../app/models/Plan';
import Enrollment from '../app/models/Enrollment';

// Importando as configurações de conexão do banco
import databaseConfig from '../config/database';

// Criando um vetor de usuários
const models = [User, Student, Plan, Enrollment];

class Database {
  constructor() {
    this.init();
  }

  // Fazendo conexão com a base de dados
  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
