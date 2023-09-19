import { Box, Button, TextField, Typography } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import Autocomplete from '@mui/material/Autocomplete'
import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';



const userSchema = yup.object().shape({
    polo: yup.string().required('required'),
    blobo: yup.string().required('required'),
    capacity: yup.string().email("Invalid email").required('required'),
})

// const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const ReservasSalas = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    // Test Data
    const polos = ["Abrantes", "Tomar"]
    const blocos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q"]
    const projectors = ['0','1','2','3']
    const capacity = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60']
    const nextMonthDys = getDaysInNextMonth()
    const initialValues = {
        polos: polos[0],
        blocos: blocos[0],
        capacity: capacity[0],
        projectors: projectors[0],
        nextMonthDys: nextMonthDys[0]
    }

    const handleFormSubmit = (values) => {
        console.log(values)
    }

    //results for the list of free rooms
    function renderRow(props) {
        const { index, style } = props;
      
        return (
          <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
              <ListItemText primary={`Sala ${index + 1}`} />
            </ListItemButton>
          </ListItem>
        );
    }

    //returns the days for the next month
    function getDaysInNextMonth() {
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
          ];
        
          const today = new Date();
          const nextMonth = new Date(today);
          nextMonth.setMonth(today.getMonth() + 1);
          const year = nextMonth.getFullYear();
          const month = nextMonth.getMonth();
          const daysInMonth = new Date(year, month + 1, 0).getDate();
          const daysArray = [];
        
          for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(`${day} ${months[month]}`);
          }
        
          return daysArray;
    }
      

    return (
        <Box m='20px'>
        <Header title='Pesquisar Sala' subtitle='Pesquise uma sala para reservar'/>

        {/* Room Form */}
        <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={handleFormSubmit}
            >
            {({values, errors, touched, handleChange, handleSubmit}) => (
                // Using specific units for grids, each of the columns can have 1 fraction of the space
                <form onSubmit={handleSubmit}>
                    <Box display='grid' gap='30px' gridTemplateColumns='repeat(4, minmax(0, 1fr))'>
                    {/* Span 4 is the entire line */}
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={polos}
                        onChange={handleChange} 
                        value={values.polos} 
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} label="Polo" fullWidth variant='filled' />}
                        
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={blocos}
                        onChange={handleChange} 
                        value={values.blocos} 
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} label="Bloco" fullWidth variant='filled' />}
                        
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={capacity}
                        value={values.capacity} 
                        onChange={handleChange} 
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} label="Ocupacidade" fullWidth variant='filled' />}
                        
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={projectors}
                        onChange={handleChange} 
                        value={values.projectors} 
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} label="Número de Projetores" fullWidth variant='filled' />}
                        
                    />

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={nextMonthDys}
                        onChange={handleChange} 
                        value={values.nextMonthDys} 
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} label="Data" fullWidth variant='filled' />}
                        
                    />

                    </Box>
                    <Box display='flex' justifyContent='end' mt='20px'>
                        <Button type='submit' color='secondary' variant='contained'>
                            Pesquisar
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>


        {/* Results List */}
        <Box mt='30px'>
            <Typography mb='10px' variant='h4' color={colors.greenAccent[400]} fontWeight='bold'>Salas Disponíveis</Typography>
            <FixedSizeList
                height={500}
                // width={1200}
                itemSize={46}
                itemCount={200}
                overscanCount={5}>
                    {renderRow}
            </FixedSizeList>
        </Box>


    </Box>
    )
}

export default ReservasSalas
