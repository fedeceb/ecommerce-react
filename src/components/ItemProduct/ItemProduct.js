import ItemCount from './ItemCount'
import './ItemProduct.scss'
import { Link } from 'react-router-dom'

const ItemProduct = ({data}) => {
   
    const {title, price, image, stock, id} = data

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} unidades`)
    }

    return (
        <div className= "item-product">  
        <Link to={`/productos/${id}`} />
            <img src={`/assets/${image}`} />
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            <p>Stock disponible: {stock}</p>
        </div>
    )
}

export default ItemProduct