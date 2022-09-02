import './NavBar.scss'
import CartWidget from './CartWidget'
import IconSearch from './Search'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
                            <li><button>Marcas</button>
                                <ul className='sub-marcas'>
                                    <Link to="/category/adidas" ><li><button>Adidas</button></li></Link>
                                    <Link to="/category/converse" ><li><button>Converse</button></li></Link>
                                    <Link to="/category/new-balance" ><li><button>New Balance</button></li></Link>
                                    <Link to="/category/nike" ><li><button>Nike</button></li></Link>
                                    <Link to="/category/puma" ><li><button>Puma</button></li></Link>
                                    <Link to="/category/vans" ><li><button>Vans</button></li></Link>
                                </ul>
                            </li>
                        <Link to="/deportes"><li><button>Deportes</button></li></Link>
                        <Link to="/contacto"><li><button>Contacto</button></li></Link>
                    </ul>
                </div>
                <div className='icons-widget'>
                    <IconSearch />
                    <Link to="/cart" ><CartWidget className='cart-widget'/></Link> {/*por ahora se aplico a icono "carrito", pero debe aplicarse a buscqueda y perfil(registrarse)*/}
                </div>
            </div>
        </header>
        </>
    )
}

export default NavBar