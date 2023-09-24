import express from 'express';

export const verifyApiToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Access denied');
    }

    next();
};
