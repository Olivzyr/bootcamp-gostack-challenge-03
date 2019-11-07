require('dotenv/config');

// Configuração de conexão com o banco de dados
module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    // Atribui a data de criação e edição nas colunas do banco de cada registro
    timestamps: true,
    // Utilizar a padronização de tabelas e colunas pelo padrão underscored
    // Caixa baixa separada por "_" ex: user_groups
    underscored: true,
    underscoredAll: true,
  },
};
