import {useState} from 'react'
import './ItemProduct'

const ItemCount = () => {
    const [count, setCount] = useState(1)

    
    const addNumber = () => {
        if(stock>count)
        {
            setCount(count + 1)
        }
        
    }
    
    

    const removeNumber = () => {
        setCount(count - 1)
    }

    return (
        <div className='countProd'>
            <button onClick={removeNumber}>-</button>
            <p>{count}</p>
            <button onClick={addNumber}>+</button>
        </div>
    )
}

export default ItemCount