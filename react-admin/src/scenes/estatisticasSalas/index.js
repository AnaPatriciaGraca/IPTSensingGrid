import { Box, Button, useTheme, Typography } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import StatBox from '../../components/StatBox'
import TreeChart from '../../components/TreeChart'
import TotalFreeRooms from '../../components/TotalFreeRooms'
import { events } from '../../data/testData'

//icons
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import { useNavigate } from 'react-router-dom'

const EstatisticasSalas = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('reservasSalas');
      }

    return (
        <Box m='20px'>
            <Box display='flex' justifyContent="space-between" alignItems="center">
                <Header title="Estatísticas das Salas" subtitle="Dados gerais das salas"/>
                <Box>
                <Button sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '10px 20px'
                }}>
                    <DownloadOutlinedIcon sx={{mr:'10px'}}/>
                    Download Reports
                </Button>
                </Box>
            </Box >

            {/* Grid and CHARTS */}
            <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='15px'>

                {/* ROW 1 */}
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Ocupação: 83' 
                        subtitle='Total das Salas'
                        progress='0.75'
                        increase='75%'
                        icon={<SchoolOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Ocupação: 20' 
                        subtitle='Total das Salas Técnicas'
                        progress='0.30'
                        increase='30%'
                        icon={<ScienceOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Ocupação: 32' 
                        subtitle='Total das Salas Teóricas'
                        progress='0.35'
                        increase='35%'
                        icon={<ContactsOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>

                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Ocupação: 8' 
                        subtitle='Total das Outras Salas'
                        progress='0.05'
                        increase='5%'
                        icon={<DesignServicesOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>


                {/* ROW 2 */}
                <Box gridColumn='span 3' gridRow='span 2' backgroundColor={colors.primary[400]}>
                    <Box mt='80px' padding='0 30px' display='flex' flexDirection='column' alignItems='center'>
                        <Box mb='30px'>
                        <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                            Pesquisar ou reservar salas
                        </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" flexGrow={1}>
                        <Button
                            variant='contained'
                            onClick={handleButtonClick}
                            sx={{
                            backgroundColor: colors.greenAccent[500],
                            width: '100%', 
                            height: '100px', 
                            fontSize: '1rem', 
                            }}
                        >
                            Reservar sala
                        </Button>
                        </Box>
                    </Box>
                </Box>


                {/* Button that redirects to 'reservar salas' */}
                <Box gridColumn='span 9' gridRow='span 2' backgroundColor={colors.primary[400]}>
                    <Box mt='25px' padding='0 30px' display='flex' justifyContent='space-between' alignItems='center'>
                        <Box>
                        <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                        Salas Teóricas, Técnicas e Outras
                        </Typography>
                        <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                            Salas Livres
                        </Typography>
                        </Box>
                    </Box>
                    <Box height='250px' mt='-20px'>
                        <TreeChart/>
                    </Box>
                </Box>

                {/* ROW 3 */}
                {/* Salas livres por bloco - Barchart */}
                <Box gridColumn='span 8' gridRow='span 2' backgroundColor={colors.primary[400]}>
                    <Box mt='25px' padding='0 30px' display='flex' flexDirection='column'>
                        <Box mb='30px'>
                        <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                            Localização das Salas Ocupadas
                        </Typography>
                        <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                            Salas Ocupadas por bloco
                        </Typography>
                        </Box>
                        
                    </Box>
                    <TotalFreeRooms isDashboard={true}/>
                </Box>

                <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} overflow='auto' >
                    <Box display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} colors={colors.grey[100]} p='15px'>
                        <Typography color={colors.grey[100]} variant='h5' fontWeight={600}>
                        Calendário
                        </Typography>
                    </Box>

                    
                    {events.map((transaction, i) =>(
                        <Box key={`${transaction.id}-${i}`} display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} p='15px'>
                        <Box>
                            <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={600}>
                                {transaction.title}
                            </Typography>
                            <Typography color={colors.grey[100]} variant='h6' fontWeight={600}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>
                            {transaction.room}
                        </Box>
                        <Box color={colors.grey[100]}>
                            {transaction.date}
                        </Box>
                        <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
                            {transaction.hour}
                        </Box>
                        </Box>
                    ))}
                    </Box>





            </Box>
        </Box>
    )
}

export default EstatisticasSalas
