import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
//Firebase
import db from '../../firebaseConfig'
import { collection, addDoc } from "firebase/firestore"

const Formulario = () => {

    const { cart, totalProducts } = useContext (CartContext)

    const [sucess, setSucess] = useState ()

    const [order, setOrder] = useState ({
        items: cart.map ((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        }),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalProducts
    })
    console.log('order', order)
    
    const [formData, setFormData] = useState ({
        name: '',
        phone: '',
        email: ''
    })
    
    const handleChange = (e) => {
       console.log("valor de target", e.target.name)
        setFormData ({...formData, [e.target.name] : e.target.value})
    }
    //console.log('form data', formData)

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar", {...order, buyer: formData})
        pushData ({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection (db, 'ordenes')
        const orderDoc = await addDoc (collectionOrder, newOrder)
        setSucess (orderDoc.id)
        //console.log('ORDEN GENERADA', orderDoc)
    }

    return (
        <>
            {sucess ? (
                <>
                <h2>Su orden se genero correctamente</h2>
                <br />
                <br />
                <p> ID de compra : {sucess} </p>
                </>
            ) : (
                <form onSubmit={submitData}>
                <h4> NOMBRE Y APELLIDO </h4>
                <input
                    type='text' 
                    name='name' 
                    placeholder='Ingrese el nombre'
                    onChange={handleChange}
                    value={formData.name} 
                />
                <br/>
                <br/>
                <h4> NÚMERO DE CONTACTO </h4>
                <input 
                    type='number' 
                    name='phone' 
                    placeholder='Ingrese número de telefono'
                    onChange={handleChange}
                    value={formData.phone}
                />
                <br/>
                <br/>
                <h4> MAIL </h4>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Ingrese el mail'
                    onChange={handleChange}
                    value={formData.email}
                />
                <br/>
                <br/>  
                <button> FINALIZAR </button>
            </form>
            )}
        </>      
    ) 
}

export default Formulario