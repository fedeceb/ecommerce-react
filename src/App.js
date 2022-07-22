import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainter';
import Modal from './components/Modal/Modal';

function App() {
  return (
    //se llama al componente NavBar
    <div className="App">
      <NavBar/>
      <div className="container">
        <ItemListContainer section="Productos en oferta"/>
        <ItemListContainer section="Productos de temporada"/>
        <ItemListContainer section="Productos más comprados"/>
      </div>
      {/*<Modal title="Modal de registro">
        <h2>Modal de registro</h2>
        <form>
          <input type="text"></input>
          <button>enviar</button>
        </form>
  </Modal>*/}
    </div>
  );
}

export default App;
