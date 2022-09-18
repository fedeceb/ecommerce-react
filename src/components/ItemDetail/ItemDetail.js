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
import { Grid } from '@mui/material';

const ItemDetail = ({ data }) => {

    const [quantitySelected, setQuantitySelected] = useState (0)

    const {title, price, image, image1, image2, image3, description, stock} = data

    return (
        <div className='detail-container'>
            <Grid container spacing={12}>
                <Grid item lg={6}>
                    <img src={`/assets/${image}`} />
                    <img src={`/assets/${image1}`} />
                    <img src={`/assets/${image2}`} />
                    <img src={`/assets/${image3}`} />
                </Grid>

                <Grid item lg={6}>
                    <h2 className='h2-detail'>{title}</h2>
                    <span className='span-detail'>$ {price}</span>
                    <p className='stock'>Stock disponible: {stock}</p>
                    {
                        quantitySelected > 0 ? <button className='btn-finCompra'><Link to="/cart" >TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} stock={stock} cartData={data}/>
                    }
                    <p className='pDescrition-detail'>{description}</p>
                    <p className='pIcons-detail'> <CreditCardIcon /> 3, 6 y hasta 12 cuotas sin interes <BasicModal>ver mas...</BasicModal></p>
                    <p className='pIcons-detail'> <RedeemIcon /> Cambios gratis en sucursales <CambiosBasicModal>ver mas...</CambiosBasicModal></p>
                    <p className='pIcons-detail'> <ShoppingBagIcon /> Retiros express en tiendas</p>
                    <p className='pIcons-detail'> <LocalShippingIcon /> Envíos gratis a partir de $40.000 <EnviosBasicModal>ver mas..</EnviosBasicModal></p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemDetail