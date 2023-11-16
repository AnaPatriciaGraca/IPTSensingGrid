import { Box, Typography, Table, TableHead, TableBody, styled, TableRow, TableContainer, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
import { useState, useEffect } from 'react'
import ConfirmationDialog from '../../components/ConfirmationDialog'
import { useNavigate } from 'react-router-dom'
import { fetchClassesData } from '../../data/getData'

const SearchResult = ({ data }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState('')
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const navigate = useNavigate()
    const [classes, setClasses] = useState([])

    useEffect(() => {
        async function fetchData() {
        try {
            const data = await fetchClassesData() 
            setClasses(data)
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        }
        }

        fetchData()
    }, [])

    //styles for the results of the search (table)
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
    }))
      
    //styles for the results of the search (rows of the table)
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
        '&:hover': {
            backgroundColor: colors.primary[300], 
            cursor: 'pointer', 
          },
    }))

    //see if room is occupied or not
    const mapIsOccupied = (value) => {
        return value === 1 ? 'Não disponível' : 'Disponível'
    }

    //get schedule of room
    const getScheduleOfRoom = (roomName) => {
        //filter classes
        const roomClasses = classes.filter((cls) => cls.room === roomName)

        //map class for the room
        const roomSchedule = roomClasses.map((cls) => {
            const dayOfWeek = getDayName(cls.day)
            return {
              day: dayOfWeek,
              name: cls.name,
              start_time: cls.start_time,
              end_time: cls.end_time,
            };
          });
        
          return roomSchedule;

    }

    // Function to get day name
    const getDayName = (dayIndex) => {
        const daysOfWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
        return daysOfWeek[dayIndex-2]
    }

    //event when I click a Room (row)
    const handleRowClick = (room) => {
        setSelectedRoom(room)
        setIsDialogOpen(true)
    }

    //modify this function to actually do the reserve of the room
    const handleReserve = async () => {
        setIsDialogOpen(false)
        const roomSchedule = getScheduleOfRoom(selectedRoom.name)
        navigate('/formularioReserva', {state: { selectedRoom, roomSchedule }})
      }
    
    //close pop ups
    const handleCloseDialog = () => {
        setSelectedRoom('')
        setIsDialogOpen(false)
        setIsConfirmationOpen(false)
            
    } 

    //handle view fo room on map
    const handleViewMapClick = () => {
        setIsDialogOpen(false)
        navigate('/mapaTomar', { state: { selectedRoom } })
    }

    return (
        <Box mt='40px'>
            <Typography mb='10px' variant="h6">Resultados da Pesquisa:</Typography>
            {/* COnstruction of the table to show the results */}
            <TableContainer>
                <Table sx={{ minWidth: 700}} aria-label="customized table">
                    <TableHead >
                    <TableRow>
                        <StyledTableCell align="left">Tipo</StyledTableCell>
                        <StyledTableCell>Sala</StyledTableCell>
                        <StyledTableCell align="center">Tipo</StyledTableCell>
                        <StyledTableCell align="center">Projetores</StyledTableCell>
                        <StyledTableCell align="center">Capacidade</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* Map the results */}
                    {data.filter((row) => row.id !== undefined && row.id !== null && row.id.toString().trim() !== '').map((row) => (
                        <StyledTableRow key={row.id} onClick={() => handleRowClick(row)}>
                            <StyledTableCell align="left">{row['function.']}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align='center'>{row.type}</StyledTableCell>
                            <StyledTableCell align="center">{row.projector}</StyledTableCell>
                            <StyledTableCell align="center">{row.maxCapacity}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            {/* Pop up to reserv the room*/}
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle color={colors.greenAccent[400]} fontWeight='bold' fontSize={16}>
                    {selectedRoom.isReservable === 1 ? `Sala ${selectedRoom.name}` : 'Atenção!'}</DialogTitle>
                    <DialogContent>
                    {selectedRoom && (
                        <div>
                        <Typography variant="h6">Horário de ocupação:</Typography>
                        <ul>
                            {getScheduleOfRoom(selectedRoom.name).map((schedule, index) => (
                            <li key={index}>
                                {schedule.day}: das {schedule.start_time} às {schedule.end_time}
                            </li>
                            ))}
                        </ul>
                        </div>
                    )}
                    </DialogContent>

                <DialogContent>
                    {selectedRoom && (
                    <Typography>
                        {selectedRoom.isReservable === 1
                            ? ``
                            : 'Esta sala não tem a capacidade de ser reservada'}
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
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleViewMapClick}
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
                        Ver no Mapa
                    </Button>
                    <Button
                        onClick={handleReserve}
                        color="primary"
                        sx={{
                            display: selectedRoom.isReservable === 1 ? 'block' : 'none',
                            background: colors.greenAccent[400],
                            fontWeight: 'bold',
                            fontSize: 12,
                            '&:hover': {
                            background: colors.greenAccent[600], 
                            },
                        }}
                    >
                        Reservar
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Pop up to confirm the reserve */}
            <ConfirmationDialog
                isOpen={isConfirmationOpen}
                onClose={handleCloseDialog}
                phrase={`A sala ${selectedRoom.name} foi reservada`} 
            />

        </Box>
        
    )
}

export default SearchResult