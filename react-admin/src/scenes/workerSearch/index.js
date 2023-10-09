import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { dadosFuncionarios } from '../../data/testData'
import Header from '../../components/Header'
import ProfessorCard from './ProfessorCard'
import { useState } from 'react'

const WorkerSearch = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [selectedProfessor, setSelectedProfessor] = useState(null)
    const [isProfessorCardOpen, setIsProfessorCardOpen] = useState(false);
    const columns = [
        // {field: 'id' , headerName: 'ID', flex: 0.5}, 
        // {field: 'registrarId', headerName:'Registrar ID'},
        {field: 'nome' , headerName: 'Nome', flex: 1, cellClassName: 'name-column--cell'}, 
        // {field: 'age' , headerName: 'Idade', type: 'number', headerAlign: 'left',align: 'left'},
        // {field: 'phone' , headerName: 'Telefone', flex: 1},
        {field: 'email' , headerName: 'Email', flex: 1},
        {field: 'gabinete' , headerName: 'Gabinete', flex: 0.5},
        {field: 'cidade' , headerName: 'Cidade', flex: 0.5},
        {field: 'curso' , headerName: 'Cursos', flex: 2},
        // {field: 'disciplina' , headerName: 'Disciplinas', flex: 1},
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
      };

      //lidar com a linha que é clicada (abrir cartão do professor)
      const handleEvent = (params, event) => {
        setSelectedProfessor(params.row)
        setIsProfessorCardOpen(true); 
      };

      //lidar com o fecho do cartão do professor
      const handleCloseCard = () => {
        setIsProfessorCardOpen(false);
        setSelectedProfessor(null);
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
        <DataGrid rows={dadosFuncionarios} 
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
