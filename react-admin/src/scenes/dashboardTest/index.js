import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { events } from '../../data/testData'
import StatBox from '../../components/StatBox'
import TemperatureData from '../../data/TemperatureData'
import CurrentClasses from '../../components/CurrentClasses'
import NoiseData from '../../data/NoiseData'
import { fetchClassesBuildingI } from '../../data/getData'
//icons
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import { useState, useEffect } from 'react'


const DashboardTest = ({ calcAvgTemperature, tempData, noiseData }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [classesI, setClassesI] = useState([])

  useEffect(() => {
    async function fetchData() {
    try {
        const data = await fetchClassesBuildingI()
        setClassesI(data.sort((a, b) => a.day - b.day))
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
    }
    fetchData()
  }, [])

  const getDayName = (dayNumber) => {
    const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
    return daysOfWeek[dayNumber-2];
  };

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
        <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} overflow='auto' >
          <Box display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} colors={colors.grey[100]} p='15px'>
            <Typography color={colors.grey[100]} variant='h5' fontWeight={600}>
              Calendário do Bloco I
            </Typography>
          </Box>
          <Box ml="20px" mr="20px">
          </Box>
          {classesI.map((classI, i) =>(
            <Box key={`${classI.name}-${classI.day}-${classI.start_time}-${classI.room}`} display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} p='15px'>
              <Box>
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={600}>
                  {classI.name}
                </Typography>
                {classI.professors.map((professor) =>(
                  <Typography color={colors.grey[100]} variant='h6' fontWeight={600}>
                    {professor}
                  </Typography>
                ))}
  
              </Box>
              <Box color={colors.grey[100]} display='flex' flexDirection='column' alignItems='center'>
                <Typography>
                  {classI.room}
                </Typography>
                
                <Typography>
                  {getDayName(classI.day)}
                </Typography>
              </Box>
              <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
                {classI.start_time}
              </Box>
            </Box>
          ))}
        </Box>

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
