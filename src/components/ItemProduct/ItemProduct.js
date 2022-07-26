import ItemCount from './ItemCount'
import './ItemProduct.scss'

const ItemProduct = ({title, price, image, stock, action}) => {
   // console.log("Propiedades: ", props.title, props.price)
    return (
        <div className= "item-product">  
            <img src={`/assets/${image}`} />
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount/><p>Stock disponible: {stock}</p>
            <button onClick={action}>Agregar al carrito</button>
        </div>
    )
}

export default ItemProduct