import { useEffect } from "react"
import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'

const ItemListContainer = ({section}) => {


    return (
        <div className='list-products'>
            <h2>{section}</h2>
                <ItemProduct title='Nike Air Max 1PRM ADM "W"' price="43.999" image={'nike-air-max-1-prm-adm-w.jpg'} stock="5"/>
                <ItemProduct title='New Balance 550 HR1' price="28.999" image={'new-balance-bb550hr1.jpg'} stock="4"/>
                <ItemProduct title='Nike W Dunk Hi Up PRM' price="39.9999" image={'nike-w-dunk-hi-up-prm-.jpg'} stock="0"/>
                <ItemProduct title='Converse Run Star Motion Hi CNVS' price="21.999" image={'converse-run-star-motion-hi-cnvs-.jpg'} stock="5"/>
        </div>
    )
}

export default ItemListContainer