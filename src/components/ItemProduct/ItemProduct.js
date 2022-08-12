import './ItemProduct.scss'
import { Link } from 'react-router-dom'

const ItemProduct = ({data}) => {
   
    const {title, price, image, id} = data

    const addToCart = () => { 
        {/*  funcion para agregar el producto de manera rapida  */}
        console.log("se agrego de manera rapida", id)
    }

    return (
        <div className= "item-product">  
            <Link to={`/productos/${id}`}>
                <img src={`/assets/${image}`} />
                <p>{title}</p>
                <span>$ {price}</span>
                <p>ENVIOS GRATIS</p>
            </Link>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemProduct