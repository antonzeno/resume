import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model';

class UserController {
    static async getAll(req: express.Request, res: express.Response) {
        const users = await User.findAll();
        res.json(users);
    }

    static async register(req: express.Request, res: express.Response) {
        console.log(req.body);
        try {
            const { username, email, password } = req.body;

            if (!email || !password || !username) {
                return res.status(400).json('Please enter username, email and password');
            }

            const emailExists = await User.findOne({ where: { email } });

            if (emailExists) {
                return res.status(409).json('User is already registered.');
            }

            const hashedPassword = bcrypt.hashSync(password, 10);
            const user = await User.create({ username, email, password: hashedPassword });
            return res.status(200).json(user);

        } catch (error) {
            console.error(error);
            return res.sendStatus(400);
        }
    }
}

export default UserController;
