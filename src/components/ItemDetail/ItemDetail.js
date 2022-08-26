import './ItemDetail.scss'
import ItemCount from '../ItemProduct/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RedeemIcon from '@mui/icons-material/Redeem';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BasicModal from '../ModalDetail/Tarjetas';
import CambiosBasicModal from '../ModalDetail/Cambios';
import EnviosBasicModal from '../ModalDetail/Envios';

const ItemDetail = ({ data }) => {

    const [quantitySelected, setQuantitySelected] = useState (0)

    const {title, price, image, description, stock} = data

    return (
        <div className='detail-container'>
            <div className='img-detail'>
                <img src={`/assets/${image}`} />
            </div>
            <div className='detail-content'>
                <h2>{title}</h2>
                <span>$ {price}</span>
                <p className='stock'>Stock disponible: {stock}</p>
                {
                    quantitySelected > 0 ? <button className='btn-finCompra'><Link to="/cart" >TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} stock={stock} cartData={data}/>
                }
                <p>{description}</p>
                <div className='descripcion-compras'>
                    <p> <CreditCardIcon /> 3, 6 y hasta 12 cuotas sin interes <BasicModal>ver mas...</BasicModal></p>
                    <p> <RedeemIcon /> Cambios gratis en sucursales <CambiosBasicModal>ver mas...</CambiosBasicModal></p>
                    <p> <ShoppingBagIcon /> Retiros express en tiendas</p>
                    <p> <LocalShippingIcon /> Envíos gratis a partir de $40.000 <EnviosBasicModal>ver mas..</EnviosBasicModal></p>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail