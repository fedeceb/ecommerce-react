import ItemProduct from "../ItemProduct/ItemProduct"
import { Grid } from "@mui/material"

const ItemList = ({dataProds}) => {
    return (
        <>
        <div className="container">
            <Grid container>
                <Grid item lg={12}>
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