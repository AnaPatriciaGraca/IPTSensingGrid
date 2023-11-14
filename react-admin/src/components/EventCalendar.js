import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { useState, useEffect } from 'react'
import { fetchClassesBuildingI } from '../data/getData'

const EventCalendar = () => {
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
        return daysOfWeek[dayNumber-2]
    }

    return (
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

    )
}

export default EventCalendar
