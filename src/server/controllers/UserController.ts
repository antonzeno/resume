import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

class UserController {
    static async login(req: express.Request, res: express.Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.sendStatus(400);
            }

            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.sendStatus(400);
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.sendStatus(403);
            }

            const token = jwt.sign({
                userId: user.id,
                username: user.username,
                email: user.email
            }, 'secretKey', { expiresIn: '1h' });

            return res.status(200).json({ token, user });

        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
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
