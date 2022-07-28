import ItemCount from './ItemCount'
import './ItemProduct.scss'

const ItemProduct = ({data}) => {
   
    const {title, price, image, stock} = data

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} unidades`)
    }

    return (
        <div className= "item-product">  
            <img src={`/assets/${image}`} />
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            <p>Stock disponible: {stock}</p>
        </div>
    )
}

export default ItemProduct