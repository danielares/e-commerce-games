import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


// Pages
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/games' element={<Games />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
