import express from 'express';
import UserController from '../controllers/UserController'

const router = express.Router();

export default (): express.Router => {
    router.post('/api/register', UserController.register);
    router.post('/api/login', UserController.login);

    return router;
}