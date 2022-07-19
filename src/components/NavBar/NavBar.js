import './NavBar.scss'

const NavBar = () => {
    return (

        <>
        <header className='header-navbar container'>
        <div className='navbar-h1'> 
            <h1>SNKRS&+</h1>
        </div>
        <div className='navbar-list'>
            <ul className='ul-list'>
                <li><button>Colecciones</button></li>
                <li><button>Marcas</button></li>
                <li><button>Deportes</button></li>
                <li><button>Buscar</button></li>
                <li><button>Usuario</button></li>
                <li><button>Carrito</button></li>
            </ul>
        </div>
        </header>
        </>
    )
}

export default NavBar