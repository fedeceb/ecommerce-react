import ItemListContainer from "../components/ItemListContainer/ItemListContainter"

// primero, crear estructura en pag "App", y llamar a "home" 
const Home = () => {
    return (
        <div>
            <ItemListContainer section="Productos en oferta"/>
            {/*<ItemListContainer section="Productos de temporada"/>*/}
            {/*<ItemListContainer section="Productos más comprados"/>*/}
        </div>
    )
}

export default Home