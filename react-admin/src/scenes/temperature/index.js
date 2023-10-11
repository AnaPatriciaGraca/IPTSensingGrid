import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import TemperatureData from '../../data/TemperatureData'
import BatteryLevel from './BatteryLevel'
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
              subtitle={"Sensor " + tempData[0].id}
              progress='0.75'
              increase='75%'
              icon={<DeviceThermostatIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={tempData[1].temperature + ' ºC'}
              subtitle={"Sensor " + tempData[1].id}
              progress='0.75'
              increase='75%'
              icon={<DeviceThermostatIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={tempData[2].temperature + ' ºC'}
              subtitle={"Sensor " + tempData[2].id}
              progress='0.75'
              increase='75%'
              icon={<DeviceThermostatIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>

          {/*ROW 2*/}
          <Box gridColumn='span 8' gridRow='span 2' backgroundColor={colors.primary[400]}>
          <Box mt='25px' padding='0 30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
              <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                Temperatura
              </Typography>
              <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                 Atual: {parseInt(calcAvgTemperature)+ " ºC"}
              </Typography>
            </Box>
          </Box>
          <Box height='250px' mt='-20px'>
            <TemperatureData isDashboard={false} tempData={tempData} />
          </Box>
        </Box>

        <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]}>
          <Box mt='25px' padding='0 30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
              <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                Níveis de bateria dos sensores
              </Typography>
              <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                Bateria
              </Typography>
            </Box>
          </Box>
          <Box height='250px' mt='-20px'>
            <BatteryLevel data={tempData} />
          </Box>
        </Box>

        <Box gridColumn='span 8' gridRow='span 2' backgroundColor={colors.primary[400]}>
            <Typography variant='h5' fontWeight='600' sx={{p: '30px 30px 0 30px'}}>
              Ruído
            </Typography>
          <Box height='250px' mt='-20px'>
            
          </Box>
        </Box>


        </Box>

        
    </Box>
  )
}

export default Temperature
