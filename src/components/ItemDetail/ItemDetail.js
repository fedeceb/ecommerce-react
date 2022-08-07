import './ItemDetail.scss'
import ItemCount from '../ItemProduct/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ data }) => {

    const [quantitySelected, setQuantitySelected] = useState (0)

    const {title, price, image, description, stock} = data

    return (
        <div className='detail-container'>
            <div className='img-detail'>
                <img src={`/assets/${image}`} />
            </div>
            <div className='detail-content'>
                <h2>{title}</h2>
                <span>$ {price}</span>
                <p className='stock'>Stock disponible: {stock}</p>
                {
                    quantitySelected > 0 ? <button className='btn-finCompra'><Link to="/cart" >TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} stock={stock}/>
                }
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ItemDetail