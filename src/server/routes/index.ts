import express from 'express';
import UserController from '../controllers/UserController'
import DownloadController from '../controllers/DownloadController';
import { verifyApiToken } from '../middlewares/index';

const router = express.Router();

export default (): express.Router => {
    router.post('/api/register', UserController.register);
    router.post('/api/login', UserController.login);
    router.get('/api/template', verifyApiToken, DownloadController.getTemplates);
    router.get('/api/template/:id', verifyApiToken, DownloadController.getTemplate);
    router.post('/api/download', verifyApiToken, DownloadController.download);

    return router;
}