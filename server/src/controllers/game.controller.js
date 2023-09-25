import { pool } from "../database/connection.js";


// Returns the game configurations stored in the database
export const getGameConfiguration = async (req, res) => {
    await pool.query('SELECT * FROM get_game_configuration()')
    .then((resolve, reject) => {
        res.json(resolve.rows)
    })
    .catch((err) => {
        res.json(err)
    })
};


export const createGame = async (req, res) => {
    
}

