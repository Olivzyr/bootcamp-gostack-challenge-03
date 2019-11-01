import Router from 'express';
// Conexão entre frontEnd e BackEnd do body para o banco.
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import PlanController from './app/controllers/PlanController';

// Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Criando a primeira rota
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Middleware para autenticação de rotas
routes.use(authMiddleware);

// Rota para atualização de informações do usuário
routes.put('/users', UserController.update);

// Rota para cadastro de alunos
routes.post('/cadastrados/atualizados', StudentController.store);

// Rota para atualização de informações dos alunos
routes.put('/cadastrados/atualizados', StudentController.update);
/**
 * Routes to crud Plans model
 */
// routes.get('/listagem/cadastro', PlansController.index);
routes.post('/listagem/cadastro', PlanController.store);
// routes.put('/listagem/cadastro', PlansController.update);
// routes.delete('/listagem/cadastro', PlansController.delete);

// Exportanto o arquivo routes.js
export default routes;
