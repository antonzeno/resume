import express from 'express';
import axios from 'axios';

class DownloadController {
    static async download(req: express.Request, res: express.Response) {
        try {

            return res.status(200).json('Download success');

        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }


    static async getTemplates(req: express.Request, res: express.Response) {
        try {
            const token = req.headers['authorization'];
            const response = await axios.get('https://api.docugenerate.com/v1/template', {
                headers: {
                    Authorization: token
                }
            });
            return res.status(200).json(response.data);
        } catch (error) {
            return res.sendStatus(400);
        }
    }

    static async getTemplate(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            const token = req.headers['authorization'];
            const response = await axios.get(`https://api.docugenerate.com/v1/template/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            return res.status(200).json(response.data);
        } catch (error) {
            // console.log(error)
            return res.sendStatus(400);
        }
    }
}

export default DownloadController;
