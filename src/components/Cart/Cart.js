import { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import '../Cart/Cart.scss'
import DatosDeCompraModal from "../ModalDatos/DatosDeCompra"
import SwiperInfiniteLoop from "../Swiper.infinite-loop-slides-group/swiper"
import { Grid } from "@mui/material" 

const Cart = () => {

    const { cart, clearCart } = useContext (CartContext)

    if (cart.length === 0) {
        return (
            <>
                <div className="sin-prods">
                    <p>NO HAY PRODUCTOS EN EL CARRITO</p>
                    <Link to='/productos'><button className="btn-otrosProds">VER OTROS PRODUCTOS</button></Link>
                </div>
                <div className="sinProds-marcas">
                    <h1> NAVEGÁ POR MARCAS </h1>
                    <SwiperInfiniteLoop />
                </div>
            </>
        )
    }

    return (
        <>
        <div className="body-carrito">
            <h1>TU CARRITO</h1>
                <Grid container spacing={6}>
                    <Grid item lg={8}>
                        {cart.map(product => <ItemCart key={product.id} product={product} />)}
                        <button className="bnt-deleteAll" onClick={ () => clearCart([]) }>BORRAR CARRITO</button>
                    </Grid>
                    <Grid item lg={4}>
                        <div className="detalleTotal-carrito">
                            <h1>RESUMEN DEL PEDIDO</h1>
                            <p>PRECIO TOTAL:</p>
                            <div className="div-final">
                                <button className="btn-fin"> <DatosDeCompraModal>FINALIZAR COMPRA</DatosDeCompraModal> </button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
        </div>
        </>
        
    )
}

export default Cart