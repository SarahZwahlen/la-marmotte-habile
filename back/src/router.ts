import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Ok' });
});

export default router;
