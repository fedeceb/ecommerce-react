import ItemCount from './ItemCount'
import './ItemProduct.scss'

const ItemProduct = ({title, price, image, stock}) => {
   
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