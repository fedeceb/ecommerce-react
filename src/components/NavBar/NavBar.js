import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <>
        <header className='header-navbar'>
        <div className='navbar-h1'> 
            <Link to="/"><h1>SNKRS&+</h1></Link>
        </div>
        <div className='navbar-list'>
            <ul>
                <Link to="/colecciones"><li><button>Colecciones</button></li></Link>
                <Link to="/marcas"><li><button>Marcas</button></li></Link>
                <Link to="/deportes"><li><button>Deportes</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
        </div>
        <CartWidget className='cart-widgets'/> {/*al aplicar "link" toma todos los iconos, solucionar*/}
        </header>
        </>
    )
}

export default NavBar