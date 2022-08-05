import { useEffect, useState } from "react"
import products from "../utils/products.mock"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const [listProd, setListProd] = useState([])

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve (products)
        }, 2000)
    })

    useEffect ( () => {
        getProducts
            .then ((res) => {
                //console.log("Productos: ", res)
                setListProd(res)
            })
    }, [])

    return (
        <>
        <div className='container'>
            <ItemList dataProds={listProd}/>
        </div>
        </>
    )
}

export default ItemListContainer