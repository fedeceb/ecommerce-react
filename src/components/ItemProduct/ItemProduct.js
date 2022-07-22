import './ItemProduct.scss'

const ItemProduct = ({title, price, image}) => {
   // console.log("Propiedades: ", props.title, props.price)
    return (
        <div className= "item-product">  
            <img src={`/assets/${image}`} />
            <p>{title}</p>
            <span>$ {price}</span>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct