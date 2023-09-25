import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar, GridToolbarExport } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'
//Icons
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'


const PesquisaFuncionarios = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: 'id' , headerName: 'ID', flex: 0.5}, 
        // {field: 'registrarId', headerName:'Registrar ID'},
        {field: 'name' , headerName: 'Nome', flex: 1, cellClassName: 'name-column--cell'}, 
        {field: 'age' , headerName: 'Idade', type: 'number', headerAlign: 'left',align: 'left'},
        {field: 'phone' , headerName: 'Telefone', flex: 1},
        {field: 'email' , headerName: 'Email', flex: 1},
        {field: 'address' , headerName: 'Morada', flex: 1},
        {field: 'city' , headerName: 'Cidade', flex: 1},
        {field: 'zipCode' , headerName: 'Código Postal', flex: 1},
    ]
    const localizedTextsMap = {
        columnMenuManage: "Gerir colunas",
        columnMenuUnsort: "Não ordenar",
        columnMenuSortAsc: "Ordenar por ordem crescente",
        columnMenuSortDesc: "Ordenar por ordem decrescente",
        columnMenuFilter: "Filtro",
        columnMenuHideColumn: "Ocultar",
        columnMenuShowColumns: "Mostrar colunas",
        filterOperatorContains: 'contains',
        filterOperatorEquals: 'igual',
        filterOperatorStartsWith: 'começa com',
        filterOperatorEndsWith: 'acaba com',
        filterOperatorIs: 'ser',
        filterOperatorNot: 'não ser',
        filterOperatorAfter: 'ser depois',
        filterOperatorOnOrAfter: 'ser ou ser depois',
        filterOperatorBefore: 'ser antes',
        filterOperatorOnOrBefore: 'ser ou ser antes',
        filterOperatorIsEmpty: 'estar vazio',
        filterOperatorIsNotEmpty: 'não estar vazio',
        filterOperatorIsAnyOf: 'ser algum de',
      };

  return (
    <Box m='20px'>
        <Header title='Funcionários' subtitle='Pesquisa por funcionários aplicando filtros' />

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
            '.MuiDataGrid-toolbarContainer .MuiButton-text': {
                color: colors.grey[100]
            },

        }}>
            <DataGrid rows={mockDataContacts} 
                    columns={columns} 
                    localeText={localizedTextsMap}
                    />
        </Box>
    </Box>
  )
}

export default PesquisaFuncionarios
