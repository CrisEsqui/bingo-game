import { Router } from 'express';
import { getGameConfiguration } from '../controllers/game.controller.js'

const gameRouter = Router();

gameRouter.get('/game-config', getGameConfiguration);

export default gameRouter;