import { Box, useTheme } from '@mui/material'
import Header from '../../components/Header'
import TemperatureData from '../../data/TemperatureData'
import { tokens } from '../../theme'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import StatBox from '../../components/StatBox'

const Temperature = ( {tempData, calcAvgTemperature} ) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)



  return (
    <Box m='20px'>
        <Header title='Temperatura' subtitle='Dados da temperatura' />

        <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='15px'>
          {/*ROW 1*/}
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={parseInt(calcAvgTemperature) + ' ºC'}
              subtitle='Média da Temperatura'
              progress='0.75'
              increase='75%'
              icon={<DeviceThermostatIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={tempData[0].temperature + ' ºC'}
              subtitle={tempData[0].type + ' 1'}
              progress='0.75'
              increase='75%'
              icon={<DeviceThermostatIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={tempData[1].temperature + ' ºC'}
              subtitle={tempData[1].type + ' 2'}
              progress='0.75'
              increase='75%'
              icon={<DeviceThermostatIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={tempData[2].temperature + ' ºC'}
              subtitle={tempData[2].type + ' 3'}
              progress='0.75'
              increase='75%'
              icon={<DeviceThermostatIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>

          {/*ROW 2*/}



        </Box>
        


        <Box height='75vh'>
          <TemperatureData tempData={tempData}/>
        </Box>

        
    </Box>
  )
}

export default Temperature
