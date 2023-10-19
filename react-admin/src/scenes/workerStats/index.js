import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import StatBox from '../../components/StatBox'
import TotalFreeProf from '../../components/TotalFreeProf'
import { topFuncHorario as funcionarios } from '../../data/testData'
import { fetchPeopleDataActive, fetchPeopleDataInactive, fetchPeopleData5Years, fetchPeopleDataProfessors } from '../../data/getData'

//icons
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useState, useEffect } from 'react'

const WorkerStats = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [activePeople, setActivePeople] = useState('')
    const [inactivePeople, setInactivePeople] = useState('')
    const [activeLast5Y, setActiveLast5Y] = useState('')
    const [totalProf, setTotalProf] = useState('')

    //get data from active people on IPT
    useEffect(() => {
        async function fetchData() {
          try {
            const dataActive = await fetchPeopleDataActive();
            setActivePeople(dataActive);
      
            const dataInactive = await fetchPeopleDataInactive();
            setInactivePeople(dataInactive);
      
            const data5Y = await fetchPeopleData5Years(); 
            setActiveLast5Y(data5Y);

            const dataProf = await fetchPeopleDataProfessors()
            setTotalProf(dataProf)
      
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, []);
      


    return (
        <Box m='20px'>
            <Box display='flex' justifyContent="space-between" alignItems="center">
                <Header title="Estatísticas dos funcionários" subtitle="Dados gerais de todos os funcionários"/>
              
            </Box >

            {/* Grid and CHARTS */}
            <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='15px'>

                {/* COL 1 */}
                <Box gridColumn='span 6' gridRow='span 5' backgroundColor={colors.primary[400]}>
                    <Box mt='25px' padding='0 30px' display='flex' flexDirection='column'>
                        <Box mb='20px'>
                            <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                                Localização dos professores
                            </Typography>
                            <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                                Professores por bloco
                            </Typography>
                        </Box>
                        <Box>
                            <Typography color={colors.redAccent[400]} fontSize="x-small" fontWeight={600}>
                            Estes dados não são reais e servem apenas para efeito representativo
                            </Typography>
                        </Box>
                        
                    </Box>
                    <TotalFreeProf isDashboard={true}/>
                </Box>

                {/* ROW 1 */}
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Total de funcionários' 
                        subtitle='Em contrato'
                        progress={(activePeople / (activePeople+inactivePeople))}
                        increase={Math.floor((activePeople / (activePeople+inactivePeople))*100)+'%'}
                        icon={<WorkOutlineOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Últimos Contratos' 
                        subtitle='Últimos 5 anos'
                        progress={(activeLast5Y/activePeople)}
                        increase={Math.floor((activeLast5Y / activePeople)*100)+'%'}
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
                        alert='Dados Representativos'
                        icon={<SchoolOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
                    />
                </Box>

                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <StatBox 
                        title='Total Professores' 
                        subtitle='Em contrato'
                        progress={(totalProf/activePeople)}
                        increase={Math.floor((totalProf / activePeople)*100)+'%'}
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
                    <Box ml="20px" mr="20px">
                        <Typography color={colors.redAccent[400]} fontSize="x-small" fontWeight={600}>
                        Estes dados não são reais e servem apenas para efeito representativo
                        </Typography>
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

export default WorkerStats
