import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerSearch from './pages/PlayerSearch'
import Home from './pages/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<PlayerSearch />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
