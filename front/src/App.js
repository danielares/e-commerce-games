import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


// Pages
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Login from "./pages/Auth/Login";
import Logout from "./pages/Auth/Logout";
import Signup from "./pages/Auth/Signup";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/games' element={<Games />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/my-orders' element={<Orders />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
