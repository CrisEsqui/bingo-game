import { useState, useEffect } from 'react'
import { Button, Alert } from 'react-bootstrap';
import './PlayersSection.css'
import axios from 'axios';

import CreatePlayerModal from '../CreatePlayerModal/CreatePlayerModal.js';
import PlayersTable from '../PlayersTable/PlayersTable.js';

const PlayersSection = () => {

  const [players, setPlayers] = useState([]);
  const [showCreatePlayerModal, setShowCreatePlayerModal] = useState(false)

  const getPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/player');
      setPlayers(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const openCreatePlayerModal = () => setShowCreatePlayerModal(true);
  const closeCreatePlayerModal = () => setShowCreatePlayerModal(false);

  useEffect(() => {
    getPlayers();
  }, [showCreatePlayerModal]);


  return (
    <div className='players-section'>

      <Button
        className='open-create-player-modal-button'
        onClick={openCreatePlayerModal}>
        Agregar jugador
      </Button>

      <CreatePlayerModal
        show={showCreatePlayerModal}
        onHide={closeCreatePlayerModal}
        players={players}
      />

      <PlayersTable
        players={players}
      />

      {(!players || players.length == 0) && <Alert variant='warning'>No hay jugadores registrados</Alert>}

    </div>
  )
}

export default PlayersSection;