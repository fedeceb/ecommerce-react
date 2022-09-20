import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
//firebase
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"
import { async } from "@firebase/util"


const DestacadosConitainer = () => {

    const [listProd, setListProd] = useState([])

    const {categoryId} = useParams()

    useEffect ( () => {
        const queryCollection = collection ( db, "productos-destacados" )
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
        <div>
            <ItemList dataProds={listProd}/>
        </div>
        </>
    )
}

export default DestacadosConitainer