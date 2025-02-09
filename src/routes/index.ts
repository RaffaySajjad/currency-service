import { API } from '../enum/api';
import { fetchData } from '../utils/fetch';
import { Request, Response, Router } from 'express';

const router = Router();

router.get(
  '/currencies',
  async (req: Request, res: Response): Promise<void> => {
    const data = await fetchData(API.CURRENCIES);
    res.json(data);
  }
);

router.get('/latest', async (req: Request, res: Response) => {
  const data = await fetchData(API.LATEST, {
    base_currency: 'USD'
  });
  res.json(data);
});

export default router;
