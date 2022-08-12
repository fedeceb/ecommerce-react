import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log("el famoso carrito: ", cart)

    const addItem = (item, quantity) => {
        let newCart;
        let product = cart.find (product => product.id === item.id) //buscamos el producto
        if ( product ) {  //si se encuentra en el carrito
            product.quantity += quantity;  // que sume a la cantidad (del props) a la cantidad existente
            newCart = [ ...cart ];  // la info se guarda en el nuevo carrito
        }
        else {
            product = { ...item, quantity: quantity };  // si no se encontro, se crea un nuevo producto
            newCart = [ ...cart, product ];  // y se guarda en el nuevo carrito
        }
        setCart (newCart)
    }

    const removeItem = (id) => {
        const newCart = cart.filter ((product) => product.id !== id)
        setCart (newCart)
    }

    const clearCart = () => {setCart ([]) }

    const isInCart = (id) => cart.find (product => product.id === id) ? true : false;

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addItem,
            removeItem,
            clearCart,
            isInCart
        }}>
            {children} {/* -- es el resto de la aplicación -- */}
        </CartContext.Provider>
    )
}

export default CartProvider