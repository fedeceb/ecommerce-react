import './App.scss';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainter';
//import Modal from './components/Modal/Modal';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Marcas from './pages/Marcas';
import Sports from './pages/Sports';
import Contact from './pages/Contact';
import Detail from './pages/Detail';

function App() {
  return (
    //se llama al componente NavBar
    
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productos' element={<Products />}/>
        <Route path='/productos/:id' element={<Detail />}/> {/* detalle de productos */}
        <Route path='/marcas' element={<Marcas />}/>
        <Route path='' element={''}/> {/* desgloce de marcas */}
        <Route path='/deportes' element={<Sports />}/>
        <Route path='' element={''}/> {/* desgloce de deportes */}
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<h1>ERROR 404 - página no encontrada</h1>}/> {/*crear una pagina aparte para estos problemas*/}
      </Routes>
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
