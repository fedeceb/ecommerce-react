import './NavBar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (

        <>
        <header className='header-navbar'>
        <div className='navbar-h1'> 
            <h1>SNKRS&+</h1>
        </div>
        <div className='navbar-list'>
            <ul>
                <li><button>Colecciones</button></li>
                <li><button>Marcas</button></li>
                <li><button>Deportes</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </div>
        <CartWidget className='cart-widgets'/>
        </header>
        </>
    )
}

export default NavBar