import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayersSection from './components/Players/PlayersSection/PlayersSection.js'
import Game from './components/Game/Game.js'
import NavBar from './components/NavBar/NavBar.js'

function App() {

  return (


    <div className="App">

      <NavBar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Game />} />
          <Route path="/players" element={<PlayersSection />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
