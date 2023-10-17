import Header from '../../components/Header'
import { tokens } from '../../theme'
import { Box, useTheme, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchCoursesData } from '../../data/getData'

const Course = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [courseData, setCourseData] = useState([])

    //data of courses from API
    useEffect(() => {
        async function fetchData() {
        try {
            const data = await fetchCoursesData(); 
            setCourseData(data)
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        }
        fetchData();
        }, []);



    return (
        <Box m='20px'>
            <Header title='Cursos' subtitle='Dados dos cursos' />
        </Box>
    )
}

export default Course
