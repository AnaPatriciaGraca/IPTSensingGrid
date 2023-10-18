import { Box, Typography, Table, TableHead, TableBody, styled, TableRow, TableContainer, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchCourseResult = ({ data }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const navigate = useNavigate()
    const [selectedCourse, setSelectedCourse] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false)

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

    //event when I click a row
    const handleRowClick = (row) => {
        setSelectedCourse(row)
        setIsDialogOpen(true)
    }

    //close pop ups
    const handleCloseDialog = () => {
        setSelectedCourse('')
        setIsDialogOpen(false)
    } 

    //navigate to details page
    const handleDetails = () => {
        setIsDialogOpen(false)
        navigate('/detalhesCurso', { state: { selectedCourse } })
    }

    return (
        <Box mt='40px'>
            <Typography mb='10px' variant="h6">Resultados da Pesquisa:</Typography>
            {/* COnstruction of the table to show the results */}
            <TableContainer>
                <Table sx={{ minWidth: 700}} aria-label="customized table">
                    <TableHead >
                    <TableRow>
                        <StyledTableCell align="left">Nivel</StyledTableCell>
                        <StyledTableCell align="center">Nome</StyledTableCell>
                        <StyledTableCell align='center'>Descrição</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* Map the results */}
                    {data.map((row) => (
                        <StyledTableRow key={row.id} onClick={() => handleRowClick(row)}>
                            <StyledTableCell align="left">{row.level}</StyledTableCell>
                            <StyledTableCell align="center" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">{row.field}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/* Pop up to reserv the room*/}
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle color={colors.greenAccent[400]} fontWeight='bold' fontSize={16}>{selectedCourse.name}</DialogTitle>
                <DialogContent>
                    <Typography>
                        {`Tem a certeza de que quer ver os detalhes do curso ${selectedCourse.name}?`}
                    </Typography>
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
                        onClick={handleDetails}
                        color="primary"
                        sx={{
                            display: 'block',
                            background: colors.greenAccent[400],
                            fontWeight: 'bold',
                            fontSize: 12,
                            '&:hover': {
                            background: colors.greenAccent[600], 
                            },
                        }}
                    >
                        Ver Detalhes
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default SearchCourseResult
