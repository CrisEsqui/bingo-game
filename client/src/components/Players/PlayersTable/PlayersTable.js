import React from 'react'
import { Table} from 'react-bootstrap';
import './PlayerTable.css'

const PlayersTable = ({ players })  => {
    return (
        <Table className='players-table' striped bordered hover>
            <thead>
                <tr>
                    <th>Cédula</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo electrónico</th>
                    <th>Partidas jugadas</th>
                    <th>Partidas ganadas</th>
                </tr>
            </thead>
            <tbody>

                {players.map((player) => {

                    return (
                        <tr id={player.id_player}>
                            <td>{player.id_number}</td>
                            <td>{player.first_name}</td>
                            <td>{player.last_name}</td>
                            <td>{player.mail}</td>
                            <td>{player.played_games}</td>
                            <td>{player.won_games}</td>
                        </tr>
                    );
                })}

            </tbody>
        </Table>
    )
}

export default PlayersTable