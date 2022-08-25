import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
//firebase
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"
import { async } from "@firebase/util"


const ItemListContainer = () => {

    const [listProd, setListProd] = useState([])

    const {categoryId} = useParams()

    //const filterByCategory = products.filter((products) => products.category === categoryId)

    /*const getProducts = new Promise ((resolve, reject) => {
        setTimeout( () => {
            if (categoryId) {
                resolve(filterByCategory)
            }
            else {
                resolve (products)
            }
        }, /*2000)
    })*/

    /*useEffect ( () => {
        getProducts()
        .then ((res) => {
            setListProd(res)
        })
        
        /*getProducts
            .then ((res) => {
                //console.log("Productos: ", res)
                setListProd(res)}
            })/*, [filterByCategory])*/

    useEffect ( () => {
        const queryCollection = collection ( db, "productos" )
        if ( categoryId ) {
            const queryFilter = query ( queryCollection, where ( "category" , "==", categoryId ))
            getDocs( queryFilter )
                .then( res => setListProd ( res.docs.map ( product => ({ id: product.id, ...product.data()}))))
        }
        else {
            getDocs ( queryCollection )
                .then ( res =>setListProd (res.docs.map(product =>({id: product.id, ...product.data()}))))
        }
    }, [categoryId])

    return (
        <>
        <div className='container'>
            <ItemList dataProds={listProd}/>
        </div>
        </>
    )
}

export default ItemListContainer