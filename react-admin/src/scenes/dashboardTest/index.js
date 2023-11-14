import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import StatBox from '../../components/StatBox'
import TemperatureData from '../../data/TemperatureData'
import CurrentClasses from '../../components/CurrentClasses'
import NoiseData from '../../data/NoiseData'
import EventCalendar from '../../components/EventCalendar'
//icons
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'


const DashboardTest = ({ calcAvgTemperature, tempData, noiseData }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Dados Gerais Tomar"/>
      </Box >

      {/* GRID AND CHARTS */}
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='15px'>
        {/* ROW 1 */}
        <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
          <StatBox 
            title={parseInt(calcAvgTemperature) + ' ºC'}
            subtitle='Temperatura média'
            toolTip='Sensores dentro dos valores "normais"'
            progress='0.75'
            increase='75%'
            alert='Sensores do bloco I'
            icon={<DeviceThermostatIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
          />
        </Box>
      
        <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
          <StatBox 
            title='80 dB' 
            subtitle='Ruído médio'
            toolTip='Sensores dentro dos valores "normais"'
            progress='0.5'
            increase='50%'
            alert='Sensores do bloco I'
            icon={<MicOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
          />
        </Box>

        
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title='78' 
              subtitle='Afluência'
              toolTip='Número de pessoas no bloco I em relação a ontem'
              progress='0.25'
              increase='+25%'
              alert='Quantidade de pessoas no bloco I hoje'
              icon={<PersonAddIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
        

        <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
          <StatBox 
            title='156' 
            subtitle='Estacionamento'
            toolTip="Lugares de estacionamento ocupados em relação a ontem"
            progress='0.36'
            increase='+36%'
            alert='Lugares ocupados'
            icon={<TrafficIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
          />
        </Box>

        {/* ROW 2 */}
        {/* LINE CHART */}
        <Box gridColumn='span 8' gridRow='span 2' backgroundColor={colors.primary[400]}>
          <Box mt='25px' padding='0 30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
              <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                Temperatura média
              </Typography>
              <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                 Atual: {parseInt(calcAvgTemperature)+ " ºC"}
              </Typography>
            </Box>
          </Box>
          <Box height='250px' mt='-20px'>
            <TemperatureData isDashboard={true} tempData={tempData} />
          </Box>
        </Box>

        {/* Calendar */}
        <EventCalendar />

        {/* ROW 3 */}

        {/* PIE CHART */}
        <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]}>
            <Typography variant='h5' fontWeight='600' sx={{p: '30px 30px 0 30px'}}>
              Aulas hoje
            </Typography>
          <Box height='250px'>
            <CurrentClasses/>
          </Box>
        </Box>

        {/* STREAM CHART */}
        <Box gridColumn='span 8' gridRow='span 2' backgroundColor={colors.primary[400]}>
            <Typography variant='h5' fontWeight='600' sx={{p: '30px 30px 0 30px'}}>
              Ruído
            </Typography>
          <Box height='250px' mt='-20px'>
            <NoiseData noiseData={noiseData} />
          </Box>
        </Box>

        

      </Box>
    </Box>
  )
}

export default DashboardTest
