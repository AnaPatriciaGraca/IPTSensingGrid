import { Box } from '@mui/material'
import Header from '../../components/Header'
import TemperatureData from '../../data/TemperatureData'

const Temperature = () => {

  return (
    <Box m='20px'>
        <Header title='Temperatura' subtitle='Dados da temperatura' />
        <Box height='75vh'>
          <TemperatureData/>
            {/*<TemperatureChart />*/}
        </Box>

        
    </Box>
  )
}

export default Temperature
