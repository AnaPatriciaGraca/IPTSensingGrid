import { Box, Button, TextField, Typography, useTheme  } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import * as yup from 'yup'
import { useFormik } from 'formik'
import useMediaQuery from "@mui/material/useMediaQuery"
import Header from "../../components/Header"
import { useLocation } from 'react-router-dom'
import { useState } from "react"
import { tokens } from '../../theme'


// Validation logger for each field
const roomSchema = yup.object().shape({
    roomName: yup.string().required('Campo obrigatório'),
    roomType: yup.string(),
    roomProjectors: yup.number(),
    roomCapacity: yup.number(),
    roomDay: yup.date().required('Campo obrigatório'),
    //only possible from 09:00 until 21:00
    roomHour: yup.string().matches(/^(09:00|1\d:00|20:00|21:00)$/, 'Formato de hora inválido. Use HH:mm das 09:00 às 21:00').required('Campo obrigatório'),
})

    const ReservForm = () => {
        const theme = useTheme()
        const colors = tokens(theme.palette.mode)
        const { state } = useLocation()
        const isNonMobile = useMediaQuery('(min-width:600px)')
        const room = state ? state.selectedRoom : null
        const schedule = state ? state.roomSchedule : null
        const [selectedDate, setSelectedDate] = useState('')

        //Function to get today's date (today or next Monday if today is Sunday)
        const getDefaultDate = () => {
            const today = new Date();
            const dayOfWeek = today.getDay();

            // If today is Sunday, set the date to next Monday
            if (dayOfWeek === 0) {
                today.setDate(today.getDate() + 1);
            }

            return today.toISOString().split('T')[0]; // Format as 'yyyy-mm-dd'
    }

    const formik = useFormik({
        initialValues: {
            roomName: room ? room.name : '',
            roomType: room ? room.type : '',
            roomProjectors: room ? room.projector : '',
            roomCapacity: room ? room.maxCapacity : '',
            roomDay: getDefaultDate(),
            roomHour: '',
        },
        validationSchema: roomSchema,
        onSubmit: (values) => {

          console.log(values)

        },
    })





  return (
    <Box m='20px'>
        <Header title='Reservar Sala' subtitle='Formulário para Reserva de Sala'/>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form onSubmit={formik.handleSubmit}>
                <Box display='grid' gap='30px' gridTemplateColumns='repeat(4, minmax(0, 1fr))' sx={{
                        '& > div': {gridColumn: isNonMobile ? undefined : 'span 4'},
                }}>
                    {/* Span 4 is the entire line */}
                    <TextField fullWidth variant='filled' 
                        type='text' 
                        label='Nome Sala' 
                        onBlur={formik.handleBlur} 
                        onChange={formik.handleChange} 
                        value={formik.values.roomName} 
                        name='roomName' 
                        error={!!formik.touched.roomName && !!formik.errors.roomName} 
                        helperText={formik.touched.roomName && formik.errors.roomName} 
                        sx={{gridColumn: 'span 2'}}
                    />
                    <TextField fullWidth variant='filled' 
                        type='text' 
                        label='Tipo de Sala' 
                        onBlur={formik.handleBlur} 
                        onChange={formik.handleChange} 
                        value={formik.values.roomType} 
                        name='roomType' 
                        error={!!formik.touched.roomType && !!formik.errors.roomType} 
                        helperText={formik.touched.roomType && formik.errors.roomType} 
                        sx={{gridColumn: 'span 2'}}
                    />
                    <TextField fullWidth variant='filled' 
                        type='text' 
                        label='Projetores' 
                        onBlur={formik.handleBlur} 
                        onChange={formik.handleChange} 
                        value={formik.values.roomProjectors} 
                        name='roomProjectors' 
                        error={!!formik.touched.roomProjectors && !!formik.errors.roomProjectors} 
                        helperText={formik.touched.roomProjectors && formik.errors.roomProjectors} 
                        sx={{gridColumn: 'span 2'}}
                    />
                    <TextField fullWidth variant='filled' 
                        type='text' 
                        label='Capacidade' 
                        onBlur={formik.handleBlur} 
                        onChange={formik.handleChange} 
                        value={formik.values.roomCapacity} 
                        name='roomType' 
                        error={!!formik.touched.roomCapacity && !!formik.errors.roomCapacity} 
                        helperText={formik.touched.roomCapacity && formik.errors.roomCapacity} 
                        sx={{gridColumn: 'span 2'}}
                    />

                    <TextField
                            fullWidth
                            variant='filled'
                            type='date'
                            label='Dia'
                            id='roomDay'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.roomDay}
                            name='roomDay'
                            error={!!formik.touched.roomDay && !!formik.errors.roomDay}
                            helperText={formik.touched.roomDay && formik.errors.roomDay}
                            sx={{ gridColumn: 'span 2' }}
                    />

                    <TextField fullWidth variant='filled' 
                        type='text' 
                        label='Hora' 
                        onBlur={formik.handleBlur} 
                        onChange={formik.handleChange} 
                        value={formik.values.roomHour} 
                        name='roomHour' 
                        error={!!formik.touched.roomHour && !!formik.errors.roomHour} 
                        helperText={formik.touched.roomHour && formik.errors.roomHour} 
                        sx={{gridColumn: 'span 2'}}
                    />
                    </Box>
                    <Box display='flex' justifyContent='end' mt='20px'>
                        <Button type='submit' color='secondary' variant='contained'>
                            Reservar Sala
                        </Button>
                    </Box>
             </form>
        </LocalizationProvider>


        <Box backgroundColor={colors.primary[400]} overflow='auto' mt="40px" maxWidth='400px'>
            <Box display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} colors={colors.grey[100]} p='15px'>
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={600}>
                    Horário de Ocupação da sala {room.name}
                </Typography>
            </Box>
    
            {schedule.map((schedule, index) => (
            <Box key={`${schedule.name}-${schedule.start_time}-${schedule.end_time}`} display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} p='15px'>
                <Typography variant='h6' fontWeight={600}> 
                    {schedule.day} - feira
                </Typography>
                <Typography color={colors.grey[100]} >
                    {schedule.name}
                </Typography>


                <Box display='flex' justifyContent='space-between' alignItems='center' >
                    <Box backgroundColor={colors.blueAccent[500]} p='5px 10px' borderRadius='4px' mr='10px'>
                        {schedule.start_time}
                    </Box>
                    -
                    <Box backgroundColor={colors.blueAccent[500]} p='5px 10px' borderRadius='4px' ml='10px'>
                        {schedule.end_time}
                    </Box>
                </Box>
            </Box>

            ))}
        </Box>


        
    </Box>
  )
}

export default ReservForm


