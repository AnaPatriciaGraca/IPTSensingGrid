import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { devicesList } from '../../data/testData'
import Header from '../../components/Header'

const DeviceList = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: 'id' , headerName: 'ID'}, 
        {field: 'name' , headerName: 'Nome', flex: 1, cellClassName: 'name-column--cell'}, 
        {field: 'location' , headerName: 'Localização', flex: 1},
        {field: 'serialNumber' , headerName: 'Número Série', flex: 1},
        {field: 'state' , headerName: 'Estado', flex: 1, renderCell: (params) => {
            return(
                <Typography color={colors.greenAccent[500]}>
                    {params.row.state}
                </Typography>
            )
        }},
        {field: 'date' , headerName: 'Data de Compra', flex: 1},
    ]

  return (
    <Box m='20px'>
        <Header title='Equipamentos' subtitle='Lista de Equipamentos' />
        <Box m='40px 0 0 0' height='75vh' sx={{
            '.MuiDataGrid-root': {
                border: 'none',
            },
            '.MuiDataGrid-cell': {
                borderBottom: 'none',
            },
            // ClassName defined in the const columns
            '.name-column--cell':{
                color: colors.greenAccent[100],
            },
            '.MuiDataGrid-columnHeaders':{
                backgroundColor: colors.blueAccent[700],
                borderBottom: 'none',
            },
            '.MuiDataGrid-virtualScroller': {
                backgroundColor: colors.primary[400],
            },
            '.MuiDataGrid-footerContainer': {
                borderTop: 'none',
                backgroundColor: colors.blueAccent[700],
            },
            '.MuiSvgIcon-root':{
                color: colors.greenAccent[600]
            }
        }}>
            <DataGrid rows={devicesList} columns={columns} checkboxSelection />
        </Box>
    </Box>
  )
}

export default DeviceList
