import CurrentClasses from "../../components/CurrentClasses"
import { Box } from '@mui/material'
import Header from '../../components/Header'

const index = () => {
  return (
    <Box m='20px'>
    <Header title='AULAS A DECORRER' subtitle='Aulas que se encontram a ser leccionadas por curso' />
    <Box height='75vh'>
        <CurrentClasses />
    </Box>
</Box>
  )
}

export default index
