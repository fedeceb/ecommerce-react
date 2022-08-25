import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './ItemProduct.scss'

const ItemCount = ({setQuantitySelected, stock, cartData }) => {

    const { addItem } = useContext( CartContext )

    const [count, setCount] = useState(1)

    const addNumber = () => {
        if (stock > count) {
            setCount(count + 1)
        }
    }
    
    const removeNumber = () => {
        if (count > 1)
            setCount(count - 1)
    }

    const onAdd = () => {
        setQuantitySelected (count)
        addItem(cartData, count)
        //console.log("se agrego al carrito desde detalle", cartData)
    }

    return (
        <div className='countProd'>
            <div className='countBtn'>
                <button onClick={removeNumber}>-</button>
                <p className='p-contador'>{count}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button className='btn-addCarrito' onClick={onAdd} >Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount