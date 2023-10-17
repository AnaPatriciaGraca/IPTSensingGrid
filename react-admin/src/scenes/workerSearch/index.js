import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import ProfessorCard from './ProfessorCard'
import { useState, useEffect } from 'react'
import { fetchPeopleData } from '../../data/getData'

const WorkerSearch = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [peopleData, setPeopleData] = useState([])
    const [selectedProfessor, setSelectedProfessor] = useState(null)
    const [isProfessorCardOpen, setIsProfessorCardOpen] = useState(false)
    const columns = [
        //{field: 'id' , headerName: 'ID', flex: 0.5}, 
        {field: 'nome' , headerName: 'Nome', flex: 0.5, cellClassName: 'name-column--cell'}, 
        {field: 'email' , headerName: 'Email', flex: 0.5},
        {field: 'gabinete' , headerName: 'Gabinete', flex: 0.5},
        {field: 'telefone' , headerName: 'Telefone', flex: 0.5},
        {field: 'UD' , headerName: 'Unidade Depart.', flex: 0.5},
        {field: 'CAT_PRO' , headerName: 'Categoria', flex: 0.5},
    ]
    const localizedTextsMap = {
        columnMenuManage: "Gerir colunas",
        columnMenuUnsort: "Não ordenar",
        columnMenuSortAsc: "Ordenar por ordem crescente",
        columnMenuSortDesc: "Ordenar por ordem decrescente",
        columnMenuFilter: "Filtro",
        columnMenuHideColumn: "Ocultar",
        columnMenuShowColumns: "Mostrar colunas",
        filterOperatorContains: 'conter',
        filterOperatorEquals: 'igual',
        filterOperatorStartsWith: 'começa com',
        filterOperatorEndsWith: 'acaba com',
        filterOperatorIs: 'ser',
        filterOperatorNot: 'não ser',
        filterOperatorAfter: 'ser depois',
        filterOperatorOnOrAfter: 'ser ou ser depois',
        filterOperatorBefore: 'ser antes',
        filterOperatorOnOrBefore: 'ser ou ser antes',
        filterOperatorIsEmpty: 'vazio',
        filterOperatorIsNotEmpty: 'preenchido',
        filterOperatorIsAnyOf: 'ser algum de',
      }

    //data from the API about people
    useEffect(() => {
        async function fetchData() {
        try {
            const data = await fetchPeopleData(); 
            setPeopleData(data)
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        }
        fetchData();
    }, []);

      //open professorCard when the row is clicked
      const handleEvent = (params, event) => {
        setSelectedProfessor(params.row)
        setIsProfessorCardOpen(true) 
      }

      //close professor card
      const handleCloseCard = () => {
        setIsProfessorCardOpen(false)
        setSelectedProfessor(null)
      }

  return (
    <Box m='20px'>
        <Header title='Funcionários' subtitle='Pesquisa por funcionários aplicando filtros' />
        {/* personalização da tabela */}
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
            
        {/* Tabela com os dados */}
        <DataGrid rows={peopleData} 
                columns={columns} 
                localeText={localizedTextsMap}
                onRowClick={handleEvent}
                />
       
        </Box>
        {isProfessorCardOpen && selectedProfessor && (
        <ProfessorCard
            professor={selectedProfessor}
            isOpen={isProfessorCardOpen}
            onClose={handleCloseCard}
        />
      )}
    </Box>
  )
}

export default WorkerSearch
