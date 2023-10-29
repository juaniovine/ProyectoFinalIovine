import './App.css';
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Notebooks from "./components/notebooks/Notebooks";
import Celulares from "./components/celulares/Celulares";
import Accesorios from "./components/accesorios/Accesorios";
import Contacto from "./components/contacto/Contacto";
import ContextProvider from './context/ContextProvider';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import CartContent from './components/cartcontent/CartContent';

function App() {

  return (
    <ContextProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route exact path="/notebooks/" element={<Notebooks />} />
        <Route exact path="/celulares" element={<Celulares />} />
        <Route exact path="/accesorios" element={<Accesorios />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path='/cart' element={<CartContent/>}/>
      </Routes>
      <Footer/>
    </div>
    </ContextProvider>
  );
}

export default App;
