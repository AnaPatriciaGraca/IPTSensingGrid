import { Box, Typography, Table, TableHead, TableBody, styled, TableRow, TableContainer, Paper } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';

const SearchResult = ({data}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
                        <StyledTableRow key={row.name}>
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
        </Box>
        
    )
}

export default SearchResult
