import { Box } from '@mui/material'
import Header from '../../components/Header'
import SearchRooms from './SearchRooms'

const RoomReserv = () => {

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

            <SearchRooms />
        
        
        </Box>
    )
}

export default RoomReserv
