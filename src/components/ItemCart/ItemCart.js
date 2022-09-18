import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import '../ItemCart/ItemCart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from "@mui/material";

const ItemCart = ({ product }) => {

    const {removeItem} = useContext (CartContext)

    const {id, image, title, quantity, price} = product

    return (
        <div className="item-cart">
            <img src={`/assets/${image}`}></img>
            <div className="item-contenido">
                <p>{title}</p>
                <p>Cantidad:{quantity}</p>
                <p>${price}</p>
                <p>Subtotal:${quantity * price}</p>
            </div>
            <div className="btn-delete">
                <button className="btn-rmv" onClick={() => removeItem(id)}><DeleteIcon/></button>
            </div>
        </div>
    )
}

export default ItemCart