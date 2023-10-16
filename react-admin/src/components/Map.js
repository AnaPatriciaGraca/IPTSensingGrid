import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet'
import OverlayTomarCampus from '../scenes/mapTomar/OverlayTomarCampus'
import { fetchRoomsData, fetchBuildsData } from '../data/getData' 
import ControlButtons from '../scenes/mapTomar/ControlButtons'
import SensorMarkers from './SensorMarkers'
import ConfirmationDialog from './ConfirmationDialog'
import { useLocation } from 'react-router-dom'
import LocationRoom from './LocationRoom'
import { tokens } from '../theme'
import markerIcon from 'leaflet/dist/images/marker-icon.png'

function Map({ location, locationTitle, tempData, noiseData }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const { state } = useLocation()
    const [rooms, setRooms] = useState([])
    const [builds, setBuilds] = useState([])
    const [showRooms, setShowRooms] = useState(false)
    const [showBuilds, setShowBuilds] = useState(false)
    const [showMarker, setShowMarker] = useState(false)
    const [showMyLocation, setShowMyLocation] = useState(false)
    const showTemperatureSensors = state ? state.showTempSensors : null;
    const [showTempSensors, setShowTempSensors] = useState(showTemperatureSensors)
    const showSoundSensors = state ? state.showNoiseSensors : null;
    const [showNoiseSensors, setShowNoiseSensors] = useState(showSoundSensors)
    //used when I click on the show on map in the page to reserve the room
    const room = state ? state.selectedRoom : null;
    const office = state ? state.professorPlace : null;
    
    //position of the map when rendered
    const [position, setPosition] = useState(location)

    //get data of the rooms and buildings
    useEffect(() => {
      async function fetchData() {
      try {
          const dataRooms = await fetchRoomsData()
          const dataBuilds = await fetchBuildsData()
          setRooms(dataRooms)
          setBuilds(dataBuilds)
          //setIsLoading(false)
      } catch (error) {
          console.error('Error fetching data:', error)
          throw error
      }
      }
        fetchData();
    }, []);

    //find room of the professor
    useEffect(() => {
      // Find the room with the matching name on my data
      const matchingRoom = rooms.find((room) => room.name === office);
      if (matchingRoom) {
        setPosition(matchingRoom.location.coordinates[0][0]);
        setShowMarker(true)
      }else{
        <ConfirmationDialog phrase="Sala não encontrada"/>
        alert=("Sala nao encontrada")
      }
      
    }, [office, rooms]);

    //get center of polygon drawn on map
    useEffect(() => {
      let centerX = location[0];
      let centerY = location[1];
      if (room && room.location && room.location.coordinates) {
        const coordinates = room.location.coordinates[0]; //outer ring coordinates
        let totalLat = 0;
        let totalLng = 0;
    
        for (const coordinate of coordinates) {
          totalLat += coordinate[1]; // Latitude
          totalLng += coordinate[0]; // Longitude
        }
    
        //average latitude and longitude
        const numPoints = coordinates.length;
        centerX = totalLng / numPoints;
        centerY = totalLat / numPoints;
      }
      setPosition([centerX, centerY]); 
      
    }, [room, location]);

    const customIcon = new L.Icon({
        iconUrl: markerIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 45],
        popupAnchor: [1, -34],
      })

    //handle click of the button for rooms, buildings and sensors
    const handleRoomClick = () => {
      setShowBuilds(false)
      setShowRooms((prevShowRooms) => !prevShowRooms)
    }
    const handleBuildClick = () => {
      setShowRooms(false)
      setShowBuilds((prevShowBuilds) => !prevShowBuilds)
    }
    const handleMyLocation = () => {
      setShowMyLocation((prevShowMyLocation) => !prevShowMyLocation)
    }
    const handleTemperature = () => {
      setShowTempSensors((prevShowTempSensors) => !prevShowTempSensors)
    }
    const handleNoise = () => {
      setShowNoiseSensors((prevShowNoiseSensors) => !prevShowNoiseSensors)
    }

  return (
    <Box display="flex">
      <Box style={{ height: '600px', width: '1000px' }}>
        <MapContainer className='map' center={position} zoom={18} maxZoom={20} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            maxZoom={20}
            maxNativeZoom={19}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {/* Conditionally render OverlayTomarCampus */}
          {locationTitle === 'Tomar' && <OverlayTomarCampus />}
          {/* room square */}
          {room != null && <LocationRoom  room={room}/>} 
          {/* all rooms */}
          {showRooms && rooms.map((selectedRoom) => (
            <LocationRoom key={selectedRoom.id} room={selectedRoom} />
          ))}
          {/* all buildings */}
          {showBuilds && builds.map((selectedBuild) => (
            <LocationRoom key={selectedBuild.id} room={selectedBuild} />
          ))}
          {/* Show the marker if showMarker is true */}
          {showMarker && (
            <Marker position={position} icon={customIcon}>
              <Popup>Gabinete do Professor</Popup>
            </Marker>
          )}
          {/* Getting location of the user */}
          {showMyLocation && <MapEvents setPosition={setPosition} /> }
          {/* Show temperature sensors */}
          {showTempSensors && tempData.map((sensor) => ( <SensorMarkers sensor={sensor } customIcon={customIcon} /> ))}
          {/* Show noise sensors */}
          {showNoiseSensors && noiseData.map((sensor) => ( <SensorMarkers sensor={sensor } customIcon={customIcon} /> ))}


        </MapContainer>
      </Box>


      {locationTitle === 'Tomar' && 
        <ControlButtons handleRoomClick={handleRoomClick} handleBuildClick={handleBuildClick} handleMyLocation={handleMyLocation} handleTemperature={handleTemperature} handleNoise={handleNoise} colors={colors} />}

    </Box>
  );
}

// Get user location
function MapEvents({ setPosition }) {
  console.log("entered")
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      console.log('Location found: ', e.latlng)
      setPosition(e.latlng);
      console.log("Updated position")
      map.flyTo(e.latlng, map.getZoom(20));
    },
  });

  return null;
}

export default Map;
