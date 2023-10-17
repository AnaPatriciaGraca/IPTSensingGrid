import Header from '../../components/Header'
import { Box  } from '@mui/material'
import SearchCourse from './SearchCourse'

const Course = () => {

    return (
        <Box m='20px'>
            <Header title='Cursos' subtitle='Dados dos cursos' />

            <SearchCourse />

        </Box>
    )
}

export default Course
