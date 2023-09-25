import express from 'express';
import cors from 'cors';
import { PORT } from './config.js'
import gameRouter from './routes/game.routes.js'
import playerRouter from './routes/player.routes.js'

const app = express();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.set('port', PORT)


app.use(gameRouter);
app.use(playerRouter)

export default app;