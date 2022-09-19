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
            <div className='img-product'>
                <img src={`/assets/${image}`} /> 
            </div>
            <div className='item-description'>
                <Link to={`/productos/${id}`}> <p>{title}</p> </Link>
                <span>$ {price}</span>
                <p className='p-envios'>Envíos gratis</p>
            </div> 
            
        </div>
    )
}

export default ItemProduct