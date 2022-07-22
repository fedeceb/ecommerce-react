import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const CartWidget = () => {
    return (
        <div className='cart-widgets'>
            <SearchSharpIcon/>
            <PersonSharpIcon/>
            <ShoppingCartSharpIcon/>
        </div>
    )
}

export default CartWidget