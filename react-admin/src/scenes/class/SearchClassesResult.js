import { Box, Typography, Table, TableHead, TableBody, styled, TableRow, TableContainer } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'

const SearchClassesResult = ({ data, dayNames }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

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
        console.log(row.name)
    }


  return (
    <Box mt='40px'>
        <Typography mb='10px' variant="h6">Resultados da Pesquisa:</Typography>
            {/* COnstruction of the table to show the results */}
            <TableContainer>
                <Table sx={{ minWidth: 700}} aria-label="customized table">
                    <TableHead >
                    <TableRow>
                        <StyledTableCell align="left">Nome</StyledTableCell>
                        <StyledTableCell align="left">Curso</StyledTableCell>
                        <StyledTableCell align="left">Ano</StyledTableCell>
                        <StyledTableCell align="left">Professor</StyledTableCell>
                        <StyledTableCell align="center">Dia</StyledTableCell>
                        <StyledTableCell align="center">Sala</StyledTableCell>
                        <StyledTableCell align='center'>Tipo</StyledTableCell>
                        <StyledTableCell align='center'>Início</StyledTableCell>
                        <StyledTableCell align='center'>Fim</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* Map the results */}
                    {data.map((row, index) => (
                        <StyledTableRow key={row.courses.map(course => course.course + course.year).join('-') + index} onClick={() => handleRowClick(row)}>
                            <StyledTableCell align="left" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align="left" scope="row">{row.courses.map((course) => course.course).join(', ')}</StyledTableCell>
                            <StyledTableCell align="left" scope="row">{row.courses.map((course) => course.year).join(', ')}</StyledTableCell>
                            <StyledTableCell align="left" scope="row">{row.professors.join(', ')}</StyledTableCell>
                            {/* monday has position 0 but is the day 2 */}
                            <StyledTableCell align="center" scope="row">{dayNames[row.day - 2]}</StyledTableCell> 
                            <StyledTableCell align="center" scope="row">{row.room}</StyledTableCell>
                            <StyledTableCell align="center" scope="row">{row.type}</StyledTableCell>
                            <StyledTableCell align="center" scope="row">{row.start_time}</StyledTableCell>
                            <StyledTableCell align="center" scope="row">{row.end_time}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
        </TableContainer>
    </Box>
  )
}

export default SearchClassesResult
