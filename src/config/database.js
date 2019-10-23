// Configuração de conexão com o banco de dados
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    // Atribui a data de criação e edição nas colunas do banco de cada registro
    timestamps: true,
    // Utilizar a padronização de tabelas e colunas pelo padrão underscored
    // Caixa baixa separada por "_" ex: user_groups
    underscored: true,
    underscoredAll: true,
  },
};
