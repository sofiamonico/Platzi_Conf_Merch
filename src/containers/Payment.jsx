import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import "../styles/components/Payment.css"
import AppContext from '../context/AppContext'
import handleSumarTotal from '../utils/index';


function Payment() {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  const navigate = useNavigate();

  const paypalOptions = {
      clientId: 
      'AZq7zg6ElEM8_skOlf25FNm3SNb0KlZeavHCnUUhcgrgf5DO6qFSns6OFk1BSaw47RrI7Rm002pT9zhG',
      intent: 'capture',
      currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido: </h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                ${item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumarTotal(cart)}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error=> console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  )
}

export default Payment