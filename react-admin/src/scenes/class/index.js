import Header from '../../components/Header'
import { tokens } from '../../theme'
import { Box, useTheme, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchClassesData } from '../../data/getData'

const Class = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [classesData, setClassesData] = useState([])

    //data of classes from API
    useEffect(() => {
        async function fetchData() {
        try {
            const data = await fetchClassesData(); 
            setClassesData(data)
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        }
        fetchData();
        }, []);

    return (
        <Box m='20px'>
            <Header title='Cadeiras' subtitle='Dados das cadeiras dos cursos' />
        </Box>
    )
}

export default Class
