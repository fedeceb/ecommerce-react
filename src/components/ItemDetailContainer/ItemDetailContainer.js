import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../utils/products.mock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState ([])

    /*const getItem = new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve (products)
        }, 2000)
    })*/

    const {id} = useParams()

    useEffect ( () => {
        /*getItem
            .then ((res) => {
                setDetail(res)*/
            filterById()
    }, [id])

    const filterById = () => {
        products.some ((products) => {
            if(products.id == id) {
                setDetail(products)
            }
        })
    }

    return (
        <div className='item-detail'>
                <ItemDetail data={detail} />
        </div>
    )
}

export default ItemDetailContainer