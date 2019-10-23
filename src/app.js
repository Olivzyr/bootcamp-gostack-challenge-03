import express from 'express';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Para permitir a utilização da estrutura de dados JSON
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}
// Exportando o arquivo app a classe App o método server
export default new App().server;
