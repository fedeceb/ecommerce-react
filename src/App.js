import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemProduct from './components/ItemProduct/ItemProduct';

function App() {
  return (
    //se llama al componente NavBar
    <div className="App">
      <NavBar/>
      <h1>Nuevos productos</h1>
      <div className='list-products'>
        <ItemProduct title='Nike Air Max 1PRM ADM "W"' price="43.999" image={'nike-air-max-1-prm-adm-w.jpg'}/>
        <ItemProduct title='New Balance 550 HR1' price="28.999" image={'new-balance-bb550hr1.jpg'}/>
        <ItemProduct title='Nike W Dunk Hi Up PRM' price="39.9999" image={'nike-w-dunk-hi-up-prm-.jpg'}/>
        <ItemProduct title='Converse Run Star Motion Hi CNVS' price="21.999" image={'converse-run-star-motion-hi-cnvs-.jpg'}/>
      </div>
    </div>
  );
}

export default App;
