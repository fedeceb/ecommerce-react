import { useEffect, useState } from "react"
import products from "../utils/products.mock"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [listProd, setListProd] = useState([])

    const {categoryId} = useParams()

    const filterByCategory = products.filter((products) => products.category === categoryId)

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout( () => {
            if (categoryId) {
                resolve(filterByCategory)
            }
            else {
                resolve (products)
            }
        }, /*2000*/)
    })

    useEffect ( () => {
        getProducts
            .then ((res) => {
                //console.log("Productos: ", res)
                setListProd(res)}
    )}, [filterByCategory])

    return (
        <>
        <div className='container'>
            <ItemList dataProds={listProd}/>
        </div>
        </>
    )
}

export default ItemListContainer