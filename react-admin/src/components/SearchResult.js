import { Box, Typography, Table, TableHead, TableBody, styled, TableRow, TableContainer, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { useState } from 'react';

const SearchResult = ({data}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isDialogOpen, setIsDialogOpen] = useState('')
    const [selectedRoom, setSelectedRoom] = useState('')
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: colors.blueAccent[400],
          color: colors.blueAccent[900],
          fontWeight: 'bold',
          fontSize: 14
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 13,
        },
    }));
      
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
        '&:hover': {
            // Add your hover styles here
            backgroundColor: colors.primary[300], 
            cursor: 'pointer', 
          },
    }));

    //event when I click a Room (row)
    const handleRowClick = (room) => {
        setSelectedRoom(room);
        setIsDialogOpen(true);
    };

    //modify this function to actually do the reserve of the room
    const handleReserve = () => {
        setIsConfirmationOpen(true);
      };
    
    //close pop ups
    const handleCloseDialog = () => {
        setSelectedRoom(null);
        setIsDialogOpen(false);
        setIsConfirmationOpen(false);
            
    }; 

    return (
        <Box mt='40px'>
            <Typography mb='10px' variant="h6">Resultados da Pesquisa:</Typography>
            <TableContainer>
                <Table sx={{ minWidth: 700}} aria-label="customized table">
                    <TableHead >
                    <TableRow>
                        <StyledTableCell align="left">Função</StyledTableCell>
                        <StyledTableCell>Sala</StyledTableCell>
                        <StyledTableCell align="center">Projetores</StyledTableCell>
                        <StyledTableCell align="center">Capacidade</StyledTableCell>
                        <StyledTableCell align="center">Disponibilidade</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.id} onClick={() => handleRowClick(row)}>
                        <StyledTableCell align="left">{row.function}</StyledTableCell>
                        <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                        <StyledTableCell align="center">{row.projector}</StyledTableCell>
                        <StyledTableCell align="center">{row.maxCapacity}</StyledTableCell>
                        <StyledTableCell align="center">{row.isOccupied}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            {/* Pop up to reserv the room*/}
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle color={colors.greenAccent[400]} fontWeight='bold' fontSize={16}>Confirmar Reserva</DialogTitle>
                <DialogContent>
                    {selectedRoom && (
                    <Typography>
                        Tem a certeza de que quer reservar a sala {selectedRoom.name}?
                    </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseDialog}
                        color="primary"
                        sx={{
                            background: colors.greenAccent[400],
                            fontWeight: 'bold',
                            fontSize: 12,
                            '&:hover': {
                            background: colors.greenAccent[600], 
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleReserve}
                        color="primary"
                        sx={{
                            background: colors.greenAccent[400],
                            fontWeight: 'bold',
                            fontSize: 12,
                            '&:hover': {
                            background: colors.greenAccent[600], 
                            },
                        }}
                    >
                        Reserve
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Pop up to confirm the reserve */}
            <Dialog open={isConfirmationOpen} onClose={handleCloseDialog}>
                <DialogTitle color={colors.greenAccent[400]} fontWeight='bold' fontSize={16}>Confirmação</DialogTitle>
                <DialogContent>
                    {selectedRoom && (
                    <Typography>
                        Sala {selectedRoom.name} foi reservada
                    </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseDialog}
                        color="primary"
                        sx={{
                            background: colors.greenAccent[400],
                            fontWeight: 'bold',
                            fontSize: 12,
                            '&:hover': {
                            background: colors.greenAccent[600], 
                            },
                        }}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>



        </Box>
        
    )
}

export default SearchResult
