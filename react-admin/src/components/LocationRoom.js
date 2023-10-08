import React, { Component } from 'react'
// import './cssComponents.css'
// import 'react-bootstrap'
import { Polygon, Tooltip } from 'react-leaflet'

const LocationRoom = ({ room }) => {
  return (
    <div className='locationMarker'>
      {/* Polygon draw on map with tooltip */}
        <Polygon color={(room.isOccupied === 1) ? 'red' : 'green'} positions={room.location.coordinates}>
            { (room.type == 'room')
                ? <Tooltip>Sala <b>{room.name}</b><br/>{room.function}</Tooltip>
                : <Tooltip>
                <b>Sala {room.name}</b><br/>
                Tipo: {room.function}<br/>
                Disponibilidade: {room.isOccupied === 1 ? 'Ocupada' : 'Disponivel'}<br/>
                Projetores: {room.projector}<br/>
                Capacidade: {room.maxCapacity}
                </Tooltip>
            }
        </Polygon>    
    </div>
  )
}

export default LocationRoom
