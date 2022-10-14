import React, { useContext } from 'react'
import "../styles/components/Success.css"
import Map from '../components/Map';
import usePositionApi from '../hooks/usePositionApi';
import AppContext from '../context/AppContext'

function Success() {
  const {state} = useContext(AppContext);
  const {buyer} = state;
  const address = (`${buyer[0].city} ${buyer[0].country}`)
  const location = usePositionApi(address)
  
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, gracias por tu compra!`}</h2>
        <span>
          Tu pedido llegará en 3 días a tu direccion:
        </span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
  )
}

export default Success