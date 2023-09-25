import { Box, Button, useTheme, Typography } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import StatBox from '../../components/StatBox'
import TotalFreeProf from '../../components/TotalFreeProf'
import { topFuncHorario as funcionarios } from '../../data/testData'
import { useNavigate } from 'react-router-dom'

//icons
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const EstatisticasFuncionarios = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/pesquisaFuncionarios');
      }

    return (
        <Box m='20px'>
            <Box display='flex' justifyContent="space-between" alignItems="center">
                <Header title="Estatísticas dos funcionários" subtitle="Dados gerais dde todos os funcionários"/>
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

                {/* COL 1 */}
                <Box gridColumn='span 6' gridRow='span 5' backgroundColor={colors.primary[400]}>
                    <Box mt='25px' padding='0 30px' display='flex' flexDirection='column'>
                        <Box mb='30px'>
                        <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                            Localização dos professores
                        </Typography>
                        <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                            Professores por bloco
                        </Typography>
                        </Box>
                        
                    </Box>
                    <TotalFreeProf isDashboard={true}/>
                </Box>

                {/* ROW 1 */}
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Total de funcionários' 
                        subtitle='Em horário laboral'
                        progress='0.75'
                        increase='75%'
                        icon={<WorkOutlineOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Total de funcionários' 
                        subtitle='Fora do horário laboral'
                        progress='0.25'
                        increase='25%'
                        icon={<HomeOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>
                {/* ROW 2 */}
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Professores' 
                        subtitle='Em horário laboral'
                        progress='0.55'
                        increase='55%'
                        icon={<SchoolOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>

                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Outros funcionários' 
                        subtitle='Em horário laboral'
                        progress='0.20'
                        increase='20%'
                        icon={<PermIdentityOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>


                {/* ROW 3 */}
                <Box gridColumn='span 6' gridRow='span 3' backgroundColor={colors.primary[400]} overflow='auto' >
                    <Box display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} colors={colors.grey[100]} p='15px'>
                        <Typography color={colors.grey[100]} variant='h5' fontWeight={600}>
                        Top funcionários por Carga horária
                        </Typography>
                        <Box color={colors.grey[100]} fontWeight={600}>
                            Total Horas
                        </Box>
                    </Box>
                    {funcionarios.map((funcionario, i) =>(
                        <Box key={`${funcionario.id}-${i}`} display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} p='15px'>
                        <Box>
                            <Typography color={colors.blueAccent[600]} variant='h5' fontWeight={600}>
                                {funcionario.title}
                            </Typography>
                            <Typography color={colors.grey[100]} variant='h6' fontWeight={600}>
                                {funcionario.user}
                            </Typography>
                        </Box>
                        <Box backgroundColor={colors.blueAccent[500]} p='5px 10px' borderRadius='4px'>
                            {`${funcionario.schedule} h`}
                        </Box>
                        </Box>
                    ))}
                
                </Box>
                

            </Box>
        </Box>
    )
}

export default EstatisticasFuncionarios
