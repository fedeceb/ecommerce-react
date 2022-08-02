import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
//import prodsDetail from '../utils/ItemDetail.mock'


const prodsDetail = {
    id:1,
    title: 'Nike Air Max 1PRM ADM "W"',
    price: "43.999",
    description: "El exclusivo Nike Air Max 1 Wabi-sabi (W) de Asia-Pacífico conmemora la antigua ideología japonesa homónima que enfatiza la belleza en todos los aspectos de la imperfección en la naturaleza. Cuenta con una parte superior de tela color crema con superposiciones Durabuck de color verde oliva, marrón, rosa claro y naranja. Las costuras en bucle en el talón, los bordados Swoosh deshilachados en la puntera y las marcas envejecidas en la suela se alinean con el espíritu de belleza en lo imperfecto del diseño.",
    image: 'nike-air-max-1-prm-adm-w.jpg',
    stock: "5"
}


const ItemDetailContainer = ({item}) => {

    const [detail, setDetail] = useState ([])

    const getItem = new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve (prodsDetail)
        }, 2000)
    })

    useEffect ( () => {
        getItem
            .then ((res) => {
                setDetail(res)
            })
    }, [])

    return (
        <div className='item-detail'>
            <h2>{item}</h2>
                <ItemDetail data={detail} />
        </div>
    )
}


export default ItemDetailContainer