import { Box } from '@mui/material'
import Header from '../../components/Header'
import TemperatureChart from '../../components/TemperatureChart'

const index = () => {
  return (
    <Box m='20px'>
        <Header title='TEMPERATURE CHART' subtitle='Simple temperature chart' />
        <Box height='75vh'>
            <TemperatureChart />
        </Box>
    </Box>
  )
}

export default index
