import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Marcas from './pages/Marcas';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';


function App() {
  return (
    //se llama al componente NavBar
    <BrowserRouter>
    <div className="App">
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/productos' element={<Products />} />
            <Route path='/productos/:id' element={<Detail />} />
            <Route path='/category/:categoryId' element={<Marcas />}/> {/* desgloce de marcas */}
            <Route path='/contacto' element={<Contact />} />
            <Route path='/cart' element={<Checkout />} />
            <Route path='*' element={<h1>ERROR 404 - página no encontrada</h1>}/> {/*crear una pagina aparte para estos problemas*/}
          </Routes>
        <Footer />
      </CartProvider>
        {/*<ItemDetailContainer />*/}
      {/*<Modal title="Modal de registro">
        <h2>Modal de registro</h2>
        <form>
          <input type="text"></input>
          <button>enviar</button>
        </form>
  </Modal>*/}
    </div>
    </BrowserRouter>
  );
}

export default App;
