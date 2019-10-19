import Router from 'express';

const routes = new Router();

// Criando a primeira rota

routes.get('/', (req, res) => res.json({ message: 'Hello' }));

// Exportanto o arquivo routes.js
export default routes;
