import ItemProduct from "../ItemProduct/ItemProduct"
import { Grid } from "@mui/material"

const ItemList = ({dataProds}) => {
    return (
        <>
        <div>
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    {dataProds.map( (products) => {
                        return <ItemProduct key={products.id} data={products}/>      
                    })}  
                </Grid>
            </Grid>
        </div>  
        </>
    )
}

export default ItemList