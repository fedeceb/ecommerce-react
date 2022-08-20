import { useContext } from 'react';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className='cart-widgets'>
            {cart.length !== 0 && <p>{cart.length}</p>}
            <ShoppingCartSharpIcon/>
        </div>
    )
}

export default CartWidget