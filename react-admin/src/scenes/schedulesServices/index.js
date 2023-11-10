import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { schedulesServices as service } from '../../data/testData'
import ProgressCircle from '../../components/ProgressCircle'

const SchedulesServices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  //get current time of day to see service progree
  const calcHoursClose = (service) => {
    
    const d = new Date()
    const currentHours = d.getHours()
    const currentMinutes = d.getMinutes()

    const serviceStart = service.open
    const serviceEnd = service.close

    // Convert time of service to minutes
    const startMinutes = parseInt(serviceStart.split(':')[0]) * 60 + parseInt(serviceStart.split(':')[1])
    const endMinutes = parseInt(serviceEnd.split(':')[0]) * 60 + parseInt(serviceEnd.split(':')[1])

    // Convert current time to minutes
    const currentMinutesOfDay = currentHours * 60 + currentMinutes

    // Calculate the fraction of time
    const fraction = (currentMinutesOfDay - startMinutes) / (endMinutes - startMinutes)

    return fraction
}

  
  return (
    <Box m='20px'>
        {/* Título da página */}
      <Header title='Serviços' subtitle='Horários dos serviços' />
      
      <Box backgroundColor={colors.primary[400]} overflow='auto' height='800px'>
        <Box
          display='grid'
          gridTemplateColumns='1fr 1fr 1fr 0.5fr' // Define 3 columns with equal width
          gap='15px'
          borderBottom={`4px solid ${colors.primary[400]}`}
          p='15px'
          alignItems='center'>
            {/* Títulos para as colunas */}
            <Typography color={colors.greenAccent[500]} variant='h4' fontWeight={600}>
                Serviço
            </Typography>
            <Typography color={colors.grey[100]} variant='h5' fontWeight={600} textAlign='center' width='150px'>
                Horário Manhã
            </Typography>
            <Typography color={colors.grey[100]} variant='h5' fontWeight={600} textAlign='center' width='150px'>
                Horário Tarde
            </Typography>
            <Typography color={colors.grey[100]} variant='h5' fontWeight={600} textAlign='center' width='150px'>
                Progresso
            </Typography>
        </Box>
        
        {/* Mapear serviços */}
        {service.map((service, i) => (
          <Box
            key={`${service.id}-${i}`}
            display='grid'
            gridTemplateColumns='1fr 1fr 1fr 0.5fr' // Define 3 columns with equal width
            gap='15px'
            borderBottom={`4px solid ${colors.primary[400]}`}
            p='15px'
            alignItems='center'
            // width='1600px'
            // height='80px'
          >
            <Box>
                {/* Nome e mail do serviço */}
              <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={600}>
                {service.title}
              </Typography>
              <Typography color={colors.grey[100]} variant='h6' fontWeight={600}>
                {service.user}
              </Typography>
            </Box>
            {/* Coluna do horário da parte da manhã */}
            <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px' width='150px' textAlign='center'>
              {`${service.open} / ${service.closeLunch}`}
            </Box>
            {/* Coluna do horário da parte da tarde */}
            <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px' width='150px' textAlign='center'>
              {`${service.openLunch} / ${service.close}`}
            </Box>
            {/* Progress Circle para ter visualmente a informação de há quanto tempo está aberto e quanto tempo falta para fechar */}
            <Box p='5px 10px' borderRadius='4px' width='150px' align='center'>
              <ProgressCircle progress={calcHoursClose(service)} size='40'/>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default SchedulesServices
