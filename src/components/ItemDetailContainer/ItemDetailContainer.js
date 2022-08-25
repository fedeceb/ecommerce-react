import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../utils/products.mock'
import { useParams } from 'react-router-dom'
//Firebase
import db from '../../firebaseConfig'
import { doc, getDoc } from "firebase/firestore"
import { async } from '@firebase/util'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState ([])

    const {id} = useParams()

    useEffect ( () => {
        //filterById ()
        getProduct ()
            .then ((res) => { setDetail (res) })
    }, [id])

    /*const filterById = () => {
        products.some ((products) => {
            if(products.id == id) {
                setDetail(products)
            }
        })
    }*/

    const getProduct = async () => {
        const docRef = doc (db, 'productos', id)
        const docSnapshot = await getDoc (docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id

        return product
    }

    return (
        <div className='item-detail'>
                <ItemDetail data={detail} />
        </div>
    )
}

export default ItemDetailContainer