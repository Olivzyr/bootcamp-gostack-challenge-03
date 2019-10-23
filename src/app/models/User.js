// Arquivo responsável na manipulação dos dados de usuário em criar ou seja,
// Criar os usuários, deletar usuários, alterar usuários

import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    // Criando objeto contendo todas as colunas
    // Referenciando init da classe pai
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // Nunca vai existir na base de dados
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    // Hooks são trechos de código que são executados de forma automática
    // De acordo com uma ação do model ou seja será executado antes de ir para
    // O banco de dados ("beforeSave").
    this.addHook('beforeSave', async user => {
      // gerando hash_password caso o usuário tenha inserido o password
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
