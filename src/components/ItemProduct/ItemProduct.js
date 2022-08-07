import './ItemProduct.scss'
import { Link } from 'react-router-dom'

const ItemProduct = ({data}) => {
   
    const {title, price, image, id} = data

    return (
        <div className= "item-product">  
            <Link to={`/productos/${id}`}>
            <img src={`/assets/${image}`} />
            <p>{title}</p>
            <span>$ {price}</span>
            <p>ENVIOS GRATIS</p>
            </Link>
        </div>
    )
}

export default ItemProduct