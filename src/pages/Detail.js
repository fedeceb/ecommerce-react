import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import '../components/ItemDetail/ItemDetail.scss'

const Detail = () => {
    return (
        <>
       {/* <h1></h1>  --- mostrar "ruta" de sesión*/}
        <div className="detail-container">
            <ItemDetailContainer />
        </div>
        </>
    )
}

export default Detail