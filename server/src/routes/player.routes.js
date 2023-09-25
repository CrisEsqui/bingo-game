import { Router } from 'express';
import {
    getPlayers,
    createPlayer
} from '../controllers/player.controller.js'

const playerRouter = Router()

playerRouter.get('/player', getPlayers);
playerRouter.post('/player', createPlayer);

export default playerRouter;