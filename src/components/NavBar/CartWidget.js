import { useContext } from 'react';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { CartContext } from '../../context/CartContext';
import { IconButton } from '@mui/material';

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className='cart-widgets'>
            <IconButton color="primary" aria-label="add to shopping cart">
                {cart.length !== 0 && <span>{cart.length}</span>}
                <ShoppingCartSharpIcon/>
            </IconButton>
            
        </div>
    )
}

export default CartWidget