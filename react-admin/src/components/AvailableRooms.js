import { Box, Typography } from '@mui/material'
import { FixedSizeList } from 'react-window';
import { tokens } from '../theme'
import { useTheme } from '@mui/material'
import { exemploSalas } from '../data/testData'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const AvailableRooms = ({reservData, polo, bloco, capacity, projector}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)


    if( projector === "" || projector == null){
        projector = 0;
    } else if (capacity === "" || capacity == null){
        capacity = 0;
    }

    //results for the list of free rooms
    function renderRow() {
        const rows = [];
        console.log('bahhhhh')
        for (let i = 0; i < exemploSalas.length; i++) {
            const sala = exemploSalas[i];
            if((sala.polo == polo || polo == null || polo === "")
                && (sala.bloco == bloco || bloco == null || bloco === "")
                && sala.capacidade >= capacity 
                && sala.projetores >= projector){
                
                    rows.push(
                    <ListItem key={i} component="div" disablePadding>
                        <ListItemButton>
                        <ListItemText
                            primary={`Sala ${sala.nome}`}
                            onClick={() => handleEventClick(sala.nome)}
                        />
                        </ListItemButton>
                    </ListItem>
                );
            }
        }

        return rows;
    }

    //confirmação da Reserva
    const handleEventClick = (salaName) => {
        if (window.confirm(`Tem a certeza de que quer confirmar a reserva para a sala '${salaName}' ?`))
        console.log('event confirmed for', salaName, 'on day ')
        // {selected.event.remove()}
    }


    return (
        <Box mt='30px'>
            <Typography mb='10px' variant='h4' color={colors.greenAccent[400]} fontWeight='bold'>Salas Disponíveis</Typography>
            <FixedSizeList
                height={500}
                // width={1200}
                itemSize={46}
                itemCount={200}
                overscanCount={5}
                >
                    {renderRow}
            </FixedSizeList>
        </Box>
    )
}

export default AvailableRooms
