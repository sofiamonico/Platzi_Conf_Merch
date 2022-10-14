import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/components/Map.css'

function Map({data}) {
 

  const {latitude, longitude} = data;
  if(latitude!=null && longitude!=null){
    return (
      <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
      )
  }
}

export default Map