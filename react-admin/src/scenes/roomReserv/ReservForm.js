import { Box, Button, TextField, Typography, useTheme, Grid, InputLabel, Select, MenuItem  } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import * as yup from 'yup'
import { useFormik } from 'formik'
import useMediaQuery from "@mui/material/useMediaQuery"
import Header from "../../components/Header"
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import { tokens } from '../../theme'
import { fetchPeopleData, fetchRoomDataByName } from "../../data/getData"
import { updateRoomOnServer } from '../../data/pushData'


// Validation logger for each field
const roomSchema = yup.object().shape({
    roomDay: yup.date().required('Campo obrigatório'),
    //only possible from 09:00 until 21:00
    roomHour: yup.string().matches(/^(09|1\d|20):[0-5][0-9]$/, 'Formato de hora inválido. Use HH:mm das 09:00 às 21:00').required('Campo obrigatório'),
})

    const ReservForm = () => {
        const theme = useTheme()
        const colors = tokens(theme.palette.mode)
        const { state } = useLocation()
        const isNonMobile = useMediaQuery('(min-width:600px)')
        const room = state ? state.selectedRoom : null
        const schedule = state ? state.roomSchedule : null
        let reservs = room.reservas ? [room.reservas] : []
        const [activePeople, setActivePeople] = useState([])
        // const [roomData, setRoomData] = useState([])



        useEffect(() => {
            async function fetchData() {
              try {
                const dataActive = await fetchPeopleData()
                setActivePeople(dataActive)
                // const room = await fetchRoomDataByName(room.name)
                // setRoomData(roomData)
          
              } catch (error) {
                console.error('Error fetching data:', error)
              }
            }
            fetchData()
          }, [])
        


        const persons = activePeople.map(person => person.nome)

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
          roomResponsable: '',
        },
        validationSchema: roomSchema,
        onSubmit: async (values) => {
          // custom validation logic
          const selectedDay = new Date(values.roomDay).toLocaleDateString('pt-BR', { weekday: 'long' }).replace(/-feira$/, '')
          const selectedTime = values.roomHour
          const currentDate = new Date();
          const selectedDateTime = new Date(values.roomDay + 'T' + values.roomHour);
      
          // Perform your validation against the schedule

          const isTimeInvalid = schedule.some(
            (scheduleItem) =>
              scheduleItem.start_time <= selectedTime && selectedTime <= scheduleItem.end_time && scheduleItem.day.toLowerCase() === selectedDay
          );
      
          if (isTimeInvalid) {
            formik.setFieldError('roomHour', 'Sala não disponível no horário selecionado');
          } else if (selectedDateTime <= currentDate) {
            // Handle the error or set an error message
            formik.setFieldError('roomDay', 'O dia e hora têm de ser no futuro');
            formik.setFieldError('roomHour', 'O dia e hora têm de ser no futuro');
            // You can also prevent form submission here if needed
          }else {
            try {
                // Your existing form submission logic
                console.log('Form submission successful:', values);
          
                // Additional logic to prepare the updated room data
                const updatedRoom = {
                  name: values.roomName,
                  reservas: [
                    {
                      roomDay: values.roomDay,
                      roomHour: values.roomHour,
                      roomResponsable: values.roomResponsable,
                    },
                  ],
                };
          
                // Call the function to update the room on the server
                await updateRoomOnServer(updatedRoom)
                let reserv = updatedRoom.reservas
          
              } catch (error) {
                // Handle any errors that occur during form submission or server update
                console.error('Error during form submission or server update:', error);
              }
          }
        },
      });



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
                        disabled={true} 
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
                        disabled={true} 
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
                        disabled={true} 
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
                        disabled={true} 
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


                    <Grid item xs={6} gridColumn='span 2'>
                        <InputLabel htmlFor="search-type">Nome do Responsável</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="Responsable"
                            value={formik.values.roomResponsable}
                            onBlur={formik.handleBlur} 
                            onChange={formik.handleChange}
                            inputProps={{
                                name: 'roomResponsable',
                                id: 'responsable-select',
                            }}
                        >
                            <MenuItem value="">Todas</MenuItem> {/* Add an empty option */}
                            {persons.map((person) => (
                                <MenuItem key={person} value={person}>
                                    {person}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    </Box>
                    <Box display='flex' justifyContent='end' mt='20px'>
                        <Button type='submit' color='secondary' variant='contained'>
                            Reservar Sala
                        </Button>
                    </Box>
             </form>
        </LocalizationProvider>

        <Box display='flex' alignItems='center'>
        <Box backgroundColor={colors.primary[400]} overflow='auto' mt="40px" maxWidth='600px'>
            <Box display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} colors={colors.grey[100]} p='15px'>
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={600}>
                    Horário de Ocupação da sala {room.name}
                </Typography>
            </Box>

            {schedule.length === 0 ? (
                <Typography variant='body1' color='textSecondary' ml='20px'>
                    Não existe um horário para esta sala
                </Typography>
                ) : (
                schedule.map((schedule, index) => (
                    <Box key={`${schedule.name}-${index}`} display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} p='15px'>
                    <Typography variant='h6' fontWeight={600}> 
                        {schedule.day} - feira
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
                )))
            }
        </Box>


        <Box backgroundColor={colors.primary[400]} overflow='auto' mt="40px" maxWidth='400px' ml="40px">
            <Box display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} colors={colors.grey[100]} p='15px'>
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={600}>
                    Reservas da sala {room.name} no dia selecionado
                </Typography>
            </Box>
    
            
            {reservs.length === 0 ? (
                <Typography variant='body1' color='textSecondary' ml="20px">
                    Não existem reservas para a sala
                </Typography>
                ) : (
                reservs.map((reserv, index) => (
                    <Box key={`${reserv[index].roomResponsable}-${index}`} display='flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[400]}`} p='15px'>
                    <Typography variant='h6' fontWeight={400} mr="20px"> 
                        {reserv[index].roomResponsable}
                    </Typography>
                    <Typography variant='h6' fontWeight={600} mr="20px"> 
                     {reserv[index].roomDay}
                    </Typography>
                    <Box backgroundColor={colors.blueAccent[500]} p='5px 10px' borderRadius='4px' ml='10px'>
                        {reserv[index].roomHour}
                    </Box>
                    </Box>
                )))
            }
        </Box>


        </Box>


        
    </Box>
  )
}

export default ReservForm


