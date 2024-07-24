import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerSearch from './pages/PlayerSearch'
import Home from './pages/Home';
import Header from './components/layouts/Header';

function App() {

  return (
    <>
      <Router>
        <Header />
          <div className='bg-gradient-to-br from-foreground-100 to-foreground/5 justify-center items-center min-h-[100vh] px-10 py-5'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/searchPlayer" element={<PlayerSearch />} />
            </Routes>
          </div>
      </Router>
    </>
  )
}

export default App
