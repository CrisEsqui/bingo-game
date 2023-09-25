import { pool } from "../database/connection.js";

// Sends all the players stored in the database
export const getPlayers = async (req, res) => {
    await pool.query('SELECT * FROM get_players()')
    .then((resolve, reject) => {
        res.json(resolve.rows);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
}

// Insert a new player in the table player
export const createPlayer = async (req, res) => {

    const body = req.body;
    const query = 'SELECT * FROM insert_player($1, $2, $3, $4)';
    const values = [body.id_number, body.first_name, body.last_name, body.mail]

    await pool.query(query, values)
    .then((resolve, reject) => {
        res.json(resolve)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}