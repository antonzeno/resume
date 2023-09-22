import fs from 'fs';
import path from 'path';
import { Model } from 'sequelize';
import crypto from 'crypto';
require('dotenv').config();

export const syncAllModels = async () => {
    try {
        const modelsDir = path.join(__dirname, '../models');

        const modelFiles = fs.readdirSync(modelsDir);
        for (const file of modelFiles) {
            const model = require(path.join(modelsDir, file)).default;

            if (model && model.prototype && model.prototype instanceof Model) {
                await model.sync({ alter: false });
            }
        }
        console.log('All models synced successfully.');
    } catch (error) {
        console.error('Error syncing models:', error);
    }
}

const SECRET = process.env.SECRET as string;

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest().toString();
}