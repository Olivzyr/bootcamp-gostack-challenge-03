// Criando o Loader para os models

import Sequelize from 'sequelize';

// Importando arquivo responsável pela manipulação das informações do banco para
// cada usuário
import User from '../app/models/User';

// Importando o model de students para ser carregado no banco
import Student from '../app/models/Student';

// Importando as configurações de conexão do banco
import databaseConfig from '../config/database';

// Criando um vetor de usuários
const models = [User];

// Criando um vetor de estudantes
const modelsStudent = [Student];

class Database {
  constructor() {
    this.init();
  }

  // Fazendo conexão com a base de dados
  init() {
    this.connection = new Sequelize(databaseConfig);
    // Conectando cada usuário no banco
    models.map(model => model.init(this.connection));
    // Conectando cada estudante ao banco
    modelsStudent.map(model => model.init(this.connection));
  }
}

export default new Database();
