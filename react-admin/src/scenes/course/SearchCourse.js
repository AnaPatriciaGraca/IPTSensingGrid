import { fetchCoursesData } from '../../data/getData'
import { useState, useEffect } from 'react'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
import { Box, MenuItem, Select, TextField, Button, Grid, InputLabel } from '@mui/material'
import SearchCourseResult from './SearchCourseResult'

const SearchCourse = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [courseData, setCourseData] = useState([])
    const [searchLevel, setSearchLevel] = useState('')
    const [searchName, setSearchName] = useState('')
    const [filteredCourse, setFilteredCourse] = useState([])

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

    const courseLevelOptions = Array.from(new Set(courseData.filter((course) => course.level && course.level.length > 0).map((course) => course.level)))
    const courseNameOptions = Array.from(new Set(courseData.filter((course) => course.name && course.name.length > 0).map((course) => course.name)))

    //handle search - ignores the fields that aren't filled
    const handleSearch = () => {
        const filtered = courseData.filter((course) => {
            const isNameMatch = !searchName || String(course.name).toLowerCase().includes(searchName.toLowerCase())
            const isLevelMatch = !searchLevel || String(course.level).toLowerCase().includes(searchLevel.toLowerCase())
            //equal or higher relative to the value searched
            // const isProjectorMatch =
            //     searchProjector === '' || searchProjector === undefined
            //         ? true // If searchProjector is empty or undefined, don't filter based on projector
            //         : room.projector >= parseInt(searchProjector); 

             return isNameMatch && isLevelMatch
        });
    
        console.log('filtered', filtered)
        setFilteredCourse(filtered)
    };

    return (
        <Box p={3}>
                <Box mb={2}>
                    <Grid container spacing={2}>
                        {/* Field for name of room */}
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-name">Nível do Curso</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="Name"
                            value={searchLevel}
                            onChange={(e) => setSearchLevel(e.target.value)}
                            inputProps={{
                                name: 'level',
                                id: 'level-select',
                            }}
                        >
                            <MenuItem value="">Todos</MenuItem> 
                            {courseLevelOptions.map((level) => (
                                <MenuItem key={level} value={level}>
                                    {level}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/* COURSE NAME */}
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-name">Nome do Curso</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="Name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            inputProps={{
                                name: 'name',
                                id: 'name-select',
                            }}
                        >
                            <MenuItem value="">Todos</MenuItem> 
                            {courseNameOptions.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    
                    
                  
                    {/* Search button */}
                    <Grid item xs={6} mt="20px">
                        <Button sx={{
                            color: colors.blueAccent[900],
                            background: colors.greenAccent[400],
                            height: '50px',
                            fontWeight: 'bold'
                        }}
                        fullWidth
                        variant="contained"
                        onClick={handleSearch}
                        >
                            Pesquisar
                        </Button>
                    </Grid>
                    </Grid>
                </Box>
                <Box mt={2}>
                    {/* Results from search */}
                    <SearchCourseResult data={filteredCourse}/> 
                </Box>
            </Box>
    )
}

export default SearchCourse
