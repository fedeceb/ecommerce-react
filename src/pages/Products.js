import ItemListContainer from "../components/ItemListContainer/ItemListContainter";

const Products = () => {
    return (
        <div>
            <h1>TODOS LOS PRODUCTOS</h1>
            <ItemListContainer section="Productos en oferta"/>
            {/*<ItemListContainer section="Productos de temporada"/>*/}
            {/*<ItemListContainer section="Productos más comprados"/>*/}
        </div>
    )
}

export default Products