import ItemListContainer from "../components/ItemListContainer/ItemListContainter";

const Products = () => {
    return (
        <div>
            <h1 className="h1-pproducts">TODOS LOS PRODUCTOS</h1>
            <ItemListContainer section="Todos los productos"/>
            {/*<ItemListContainer section="Productos de temporada"/>*/}
            {/*<ItemListContainer section="Productos más comprados"/>*/}
        </div>
    )
}

export default Products