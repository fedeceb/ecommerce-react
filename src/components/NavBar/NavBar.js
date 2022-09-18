import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Dropdown from '../Dropdown/dropdown'
import { IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const NavBar = () => {

    const [dropdown, setDropdown] = useState(false)

    return (

        <>
        <header>
            <div className='dh-anuncio'>
                <p className='p-anuncio'>ENVÍOS GRATIS A PARTIR DE $40000 - CUOTAS SIN INTERESES</p>
            </div>
            <div className='dh-container'>
                <div className='dh-brand'> 
                    <Link to="/"><h1>SNKRS&+</h1></Link>
                </div>
                <div className='dh-list'>
                    <ul>
                        <Link to="/productos"><li><button>Productos</button></li></Link>
                            <li     
                                onMouseEnter = { () => setDropdown (true) }
                                onMouseLeave = { () => setDropdown (false) }>
                                <button>Marcas</button>
                                <ul className='sub-marcas'  onClick = { () => setDropdown (!dropdown) } >
                                {dropdown && <Dropdown />}
                                </ul>
                            </li>
                        <Link to="/contacto"><li><button>Contacto</button></li></Link>
                    </ul>
                </div>
                <div className='icons-widget'>
                    <Link to="/cart" ><CartWidget className='cart-widget'/></Link>
                </div>
            </div>
        </header>
        </>
    )
}

export default NavBar