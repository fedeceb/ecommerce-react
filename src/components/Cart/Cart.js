import { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import '../Cart/Cart.scss'
import DatosDeCompraModal from "../ModalDatos/DatosDeCompra"

const Cart = () => {

    const { cart, clearCart } = useContext (CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <p>No hay productos en el carrito</p>
                <Link to='/productos'>Ver otros productos</Link>
            </div>
        )
    }

    return (
        <>
        <h1>TU CARRITO</h1>
        <div className="body-carrito">
            <div className="detalle-carrito">
                {cart.map(product => <ItemCart key={product.id} product={product} />)}
                <button className="bnt-deleteAll" onClick={ () => clearCart([]) }>BORRAR CARRITO</button>
            </div>
            <div className="detalleTotal-carrito">
                <h1>RESUMEN DEL PEDIDO</h1>
                <div>
                    <p>PRECIO TOTAL:</p>
                    <button>CALCULAR ENVIO</button>
                </div>
                <div>
                    <button> <DatosDeCompraModal>FINALIZAR COMPRA</DatosDeCompraModal> </button>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Cart