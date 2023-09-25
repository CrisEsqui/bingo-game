import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import './PlayersSection.css'
import axios from 'axios';

import CreatePlayerModal from '../CreatePlayerModal/CreatePlayerModal.js';
import PlayersTable from '../PlayersTable/PlayersTable.js';

const PlayersSection = () => {

  const [players, setPlayers] = useState([]);
  const [showCreatePlayerModal, setShowCreatePlayerModal] = useState(false)
  const mockup = [
    { id_player: 1, id_number: 1, first_name: 'Cristhian', last_name: 'Esquivel', mail: 'cr@gmail.com', played_games: 10, won_games: 5 },
    { id_player: 2, id_number: 1, first_name: 'Cristhian', last_name: 'Esquivel', mail: 'cr@gmail.com', played_games: 10, won_games: 5 },
    { id_player: 3, id_number: 1, first_name: 'Cristhian', last_name: 'Esquivel', mail: 'cr@gmail.com', played_games: 10, won_games: 5 },
    { id_player: 4, id_number: 1, first_name: 'Cristhian', last_name: 'Esquivel', mail: 'cr@gmail.com', played_games: 10, won_games: 5 },
    { id_player: 5, id_number: 1, first_name: 'Cristhian', last_name: 'Esquivel', mail: 'cr@gmail.com', played_games: 10, won_games: 5 },
    { id_player: 6, id_number: 1, first_name: 'Cristhian', last_name: 'Esquivel', mail: 'cr@gmail.com', played_games: 10, won_games: 5 },
  ]

  const getPlayers = async () => {
    try {
      // const response = await axios.get('http://localhost:3001/player');
      // setPlayers(response.data);

      setPlayers(mockup);
    } catch (err) {
      console.log(err);
    }
  }

  const openCreatePlayerModal = () => setShowCreatePlayerModal(true);
  const closeCreatePlayerModal = () => setShowCreatePlayerModal(false);

  useEffect(() => {
    getPlayers();
  }, []);


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

    </div>
  )
}

export default PlayersSection;