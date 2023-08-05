import GeoChart from '../../components/GeoChart'
import { Box } from '@mui/material'
import Header from '../../components/Header'

const Geography = () => {
  return (
    <Box m='20px'>
        <Header title='GEOGRAPHY CHART' subtitle='Simple geography chart' />
        <Box height='75vh'>
            <GeoChart />
        </Box>
    </Box>
  )
}

export default Geography
