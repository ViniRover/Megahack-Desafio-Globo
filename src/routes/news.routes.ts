import { Router } from 'express';
import { getRepository } from 'typeorm';

import New from '../models/New';

const newsRouter = Router();

newsRouter.get('/', async (req, res) => {
  const newsRepository = getRepository(New);

  const allNews = newsRepository.find();

  return res.json(allNews);
});

export default newsRouter;
