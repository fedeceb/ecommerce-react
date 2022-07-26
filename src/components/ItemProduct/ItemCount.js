import {useState} from 'react'
import './ItemProduct.scss'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const addNumber = () => {
        if(stock > count){
            setCount(count + 1)
        }
    }
    
    const removeNumber = () => {
        if(count > initial){
            setCount(count - 1)
        }
    }

    return (
        <div className='countProd'>
            <div className='countBtn'>
                <button onClick={removeNumber}>-</button>
                <p>{count}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount