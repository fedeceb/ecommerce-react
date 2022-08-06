import { useEffect, useState } from "react"
import products from "../utils/products.mock"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [listProd, setListProd] = useState([])

    /*const {marcasId} = useParams()*/

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
            /*filterByMarcasId()*/
            })
    }, [])

    /*const filterByMarcasId = () => {
        products.some ((products) => {
            if(products.marca == marcasId)
                setListProd(products)
        })
    }*/

    return (
        <>
        <div className='container'>
            <ItemList dataProds={listProd}/>
        </div>
        </>
    )
}

export default ItemListContainer