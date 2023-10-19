
import { colors } from '@mui/material'
import { Marker, Popup } from 'react-leaflet'
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const SensorMarkers = ({ sensor, sensorInfo, customIcon}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Marker
        key={sensor.id}
        position={[sensor.location.coordinates[1], sensor.location.coordinates[0]]}
        icon={customIcon}
    >
      {/*Ver porque o estilo nao esta a funcionar*/}
        <Popup style={{background: colors.greenAccent[400], fontWeight: 'bold', fontSize: 12,}}>
            <div>
              <h3>Sensor: {sensor.id}</h3>
              <p>Descrição: {sensor.description}</p>
              <p>Dados: {sensorInfo}</p>
            </div>
        </Popup>
    </Marker>
  )
}

export default SensorMarkers
