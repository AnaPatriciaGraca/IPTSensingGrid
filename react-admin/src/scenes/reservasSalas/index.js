import { Box } from '@mui/material'
import Header from '../../components/Header'
import React from 'react';
import SearchRooms from '../../components/SearchRooms'

// const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const ReservasSalas = () => {

    //today's date
    function getFormattedDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
        return `${dd} / ${mm} / ${yyyy}`;
    }


    return (
        <Box m='20px'>
        <Header title='Pesquisar Sala' subtitle='Pesquise uma sala para reservar'/>

        {/* Room Form */}
   

        <SearchRooms />
        
        
    </Box>
    )
}

export default ReservasSalas
