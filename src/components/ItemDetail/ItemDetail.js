import './ItemDetail.scss'
const ItemDetail = ({ data }) => {

    const {title, price, image, description} = data


    return (
        <div className='detail-container'>
            <div className='img-detail'>
                <img src={`/assets/${image}`} />
            </div>
            <div className='detail-content'>
                <h2>{title}</h2>
                <span>$ {price}</span>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail