import { Box, Typography, CardMedia, Button } from '@mui/material'
import Header from '../../components/Header'
import { useLocation } from 'react-router-dom'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'

const CourseDetails = ({ selectedCourse }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const { state } = useLocation()
    const data = state ? state.selectedCourse : null

  return (
    <Box m='20px'>
        <Header title={data.name} subtitle=''/>

        {/* Details */}
        <Typography variant="h3" mb="10px" ml="20px" color={colors.greenAccent[500]} sx={{ fontWeight: 'bold' }}>
            Detalhes
        </Typography>
        <Typography ml="20px">
            {data.field}
        </Typography>
        
        {/* Contacts */}
        <Typography variant="h3" mt="30px" ml="20px" color={colors.greenAccent[500]} sx={{ fontWeight: 'bold' }}>
            Contactos
        </Typography>
        {data.contacts.map((person) => (
            <Box key={person.id} display="inline-block" justifyContent="center" maxWidth='400px' mt="20px" ml="20px" sx={{background: colors.blueAccent[700], borderRadius: '8px', padding: '20px'}}>
                <Box display="ruby-base" alignItems='left'>
                    <CardMedia
                    sx={{ height: 100, width: 100 }}
                    image={person.photo}
                    title={person.nome}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                    component="img"
                    /> 
                    <Box ml='30px' maxWidth='180px'>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: colors.blueAccent[900] }}>
                            {person.role}
                        </Typography>
                        <Typography>
                            {person.name}
                        </Typography>
                    </Box>
                </Box>
          </Box>
        ))}

        {/* Course Units */}
        <Typography variant="h3" mt="30px" ml="20px" mb="20px" color={colors.greenAccent[500]} sx={{ fontWeight: 'bold' }}>
            Cadeiras
        </Typography>
        {data.course_units.map((unit) => (
                <Box ml="20px" mb="10px" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: colors.blueAccent[700],
                    borderRadius: '8px',
                    padding: '10px',
                    maxWidth: '800px',
                  }}>
                    <Typography>
                        {unit.name}
                    </Typography>
                    <Button sx={{background: colors.greenAccent[500], '&:hover':{background: colors.greenAccent[800]} ,borderRadius: '8px', padding: '10px', ml: "10px", fontWeight: "bold"}}>
                        Ver Detalhes
                    </Button>
                </Box>
        ))}

    </Box>
  )
}

export default CourseDetails
