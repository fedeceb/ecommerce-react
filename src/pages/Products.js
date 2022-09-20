import ItemListContainer from "../components/ItemListContainer/ItemListContainter";

const Products = () => {
    return (
        <div className="prod-container">
            <h1 className="h1-pproducts">TODOS LOS PRODUCTOS</h1>
            <ItemListContainer section="Todos los productos"/>
        </div>
    )
}

export default Products