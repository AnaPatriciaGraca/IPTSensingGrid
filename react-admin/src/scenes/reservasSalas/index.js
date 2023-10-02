import { Box, Button, TextField } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { useState, useEffect } from 'react'
import React from 'react';
import SearchRooms from '../../components/SearchRooms'

// const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const ReservasSalas = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [reservDate, setReservDate] = useState(getFormattedDate())
    const [polo, setPolo] = useState('')
    const [bloco, setBloco] = useState('')
    const [capacity, setCapacity] = useState('')
    const [projector, setProjector] = useState('')
    const [showAvailableRooms, setShowAvailableRooms] = useState(false);

    // Test Data
    const polos = ["Abrantes", "Tomar"]
    const blocos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q"]
    const projectors = ['0','1','2','3']
    const capacities = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60']

    //today's date
    function getFormattedDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
        return `${dd} / ${mm} / ${yyyy}`;
    }

    const handleFormSubmit = () => {
        //being logged everytime the data is changed
        console.log(reservDate, polo, bloco, capacity, projector)
        setShowAvailableRooms(true);
    } 
      
    const MemoizedAutocomplete = React.memo((props) => (
        <Autocomplete {...props} />
      ));

    return (
        <Box m='20px'>
        <Header title='Pesquisar Sala' subtitle='Pesquise uma sala para reservar'/>

        {/* Room Form */}
   
                    {/* <Box display='grid' gap='30px' gridTemplateColumns='repeat(4, minmax(0, 1fr))'> */}
                    {/* Span 4 is the entire line */}
                    {/* <TextField fullWidth variant='filled' 
                        type='date' 
                        label='Data' 
                        onChange={(e) => {setReservDate(e.target.value);}}
                        value={reservDate} 
                        name='todayDate' 
                        sx={{gridColumn: 'span 2'}}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={polos}
                        name='polo'
                        onChange={(e, newValue) => {setPolo(newValue)}} // Use newValue to set the selected value
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} 
                                                    
                                                    label="Polo" 
                                                    fullWidth variant='filled' />}
                        
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={blocos}
                        name='bloco'
                        onChange={(e, newValue) => {setBloco(newValue)}} 
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} 
                                                    label="Bloco" fullWidth 
                                                    variant='filled' />}
                        
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={capacities}
                        name='capacity'
                        onChange={(e, newValue) => {setCapacity(newValue)}} 
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} 
                                                    label="Ocupacidade" 
                                                    fullWidth variant='filled' />}
                        
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={projectors}
                        name='projector'
                        onChange={(e, newValue) => {setProjector(newValue)}} 
                        sx={{gridColumn: 'span 2'}}
                        renderInput={(params) => <TextField {...params} 
                                                    label="Número de Projetores"
                                                    fullWidth variant='filled' />}
                        
                    />

                    </Box> */}

        {/* <Box display='flex' justifyContent='end' mt='20px'>
            <Button onClick={handleFormSubmit} color='secondary' variant='contained'>
                Pesquisar
            </Button>
        </Box> */}

        {/* { showAvailableRooms && <AvailableRooms
            reservDate={reservDate}
            polo={polo}
            bloco={bloco}
            capacity={capacity}
            projector={projector}
        />} */}

        <SearchRooms />
        
        
    </Box>
    )
}

export default ReservasSalas
