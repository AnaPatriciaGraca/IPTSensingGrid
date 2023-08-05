import GeoChart from '../../components/GeoChart'
import { Box, colors } from '@mui/material'
import Header from '../../components/Header'

const Geography = () => {
  return (
    <Box m='20px'>
        <Header title='GEOGRAPHY CHART' subtitle='Simple geography chart' />
        <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
            <GeoChart />
        </Box>
    </Box>
  )
}

export default Geography
