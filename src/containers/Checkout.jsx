import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import '../styles/components/Checkout.css'
import AppContext from '../context/AppContext'
import handleSumarTotal from '../utils/index'

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleEliminarItem = (product,i) => () => {
      removeFromCart(product,i);
  }

  

  return (
    <>
    <Helmet>
      <title>Platzi Conf Merch - Checkout</title>
    </Helmet>
    <div className="Checkout">
      <div className="Checkout-content">
        
        {cart.length > 0 ? <h3>Lista de pedidos: </h3> : <h3>El carrito se encuentra vacío... </h3>}
        {cart.map((item, i) => (
          <div className="Checkout-item">
          <h4>{item.title}</h4>
          <span>$ {item.price}</span>
          <button type='button' onClick={handleEliminarItem(item,i)}>
          <i className="fa-solid fa-trash"/>
          </button>
        </div>
        ))}
      </div>
      {cart.length > 0 && (
          <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumarTotal(cart)}`}</h3>
          <button type='button'>
            <Link to="/checkout/information">
            Confirmar pedido
            </Link>
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default Checkout