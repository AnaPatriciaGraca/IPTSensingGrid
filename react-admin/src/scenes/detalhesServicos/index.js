import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { schedulesServices as service } from '../../data/testData'

const DetalhesServicos = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  
  return (
    <Box m='20px'>
        {/* Título da página */}
      <Header title='Serviços' subtitle='Horários dos serviços' />
      
      <Box backgroundColor={colors.primary[400]} overflow='auto' height='800px'>
        <Box
          display='grid'
          gridTemplateColumns='1fr 1fr 1fr' // Define 3 columns with equal width
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
        </Box>
        
        {/* Maear serviços */}
        {service.map((service, i) => (
          <Box
            key={`${service.id}-${i}`}
            display='grid'
            gridTemplateColumns='1fr 1fr 1fr' // Define 3 columns with equal width
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
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default DetalhesServicos
