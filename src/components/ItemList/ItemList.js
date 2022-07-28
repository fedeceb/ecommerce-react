import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({dataProds}) => {
    return (
        <>
            {dataProds.map( (products) => {
                    return <ItemProduct key={products.id} data={products}/>      
            })}  
        </>
    )
}

export default ItemList