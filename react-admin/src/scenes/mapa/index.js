import React, { useState } from 'react';
import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

function Map() {
  const [position, setPosition] = useState([39.599700, -8.39070]);
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <Box style={{ height: '600px', width: '1000px' }} align='center'>
        <MapContainer className='map' center={position} zoom={18} maxZoom={20} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                maxZoom={20}
                maxNativeZoom={19}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                Your are here
                </Popup>
            </Marker>

            {/*Getting location of user*/}
            <MapEvents setPosition={setPosition} />
        </MapContainer>
    </Box>
  );
}

//get user location
function MapEvents({ setPosition }) {
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom(20));
    },
  });

  return null; 
}

export default Map;
