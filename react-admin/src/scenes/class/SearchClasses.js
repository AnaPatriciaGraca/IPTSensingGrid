
import { useState, useEffect } from 'react'
import { fetchClassesData } from '../../data/getData'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
import { Box, MenuItem, Select, Button, Grid, InputLabel } from '@mui/material'
import SearchClassesResult from './SearchClassesResult'

const SearchClasses = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [classesData, setClassesData] = useState([])
    const [searchName, setSearchName] = useState('')
    const [searchCourse, setSearchCourse] = useState('')
    const [searchWeekDay, setSearchWeekDay] = useState('')
    const [searchProfessor, setSearchProfessor] = useState('')
    const [searchCourseYear, setSearchCourseYear] = useState('')
    const [filteredClass, setFilteredClass] = useState([])

    //data of classes from API
    useEffect(() => {
        async function fetchData() {
        try {
            const data = await fetchClassesData() 
            setClassesData(data)
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        }
        }
        fetchData()
        }, [])

        //options available for the search
        const classCourseOptions = Array.from(
            new Set(
                classesData
                  .map((classR) => classR.courses) //array of courses of the class
                  .filter((courses) => Array.isArray(courses)) //don't repeat the values in the array
                  .map((courses) => courses.map((course) => course.course)) //extract the course from nested array "courses"
                  .flat()
                  .filter((course) => course) // Filter out any falsy (null, undefined, empty) course names
            )
        )
        const classYearOptions = Array.from(
            new Set(
                classesData
                  .map((classR) => classR.courses) //array of courses of the class
                  .filter((courses) => Array.isArray(courses)) //don't repeat the values in the array
                  .map((courses) => courses.map((course) => course.year)) //extract the course from nested array "courses"
                  .flat()
                  .filter((year) => year) // Filter out any falsy (null, undefined, empty) course names
            )
        )
        const classProfessorOptions = Array.from(
            new Set(
                classesData
                  .map((classR) => classR.professors) //array of courses of the class
                  .filter((professor) => Array.isArray(professor)) //don't repeat the values in the array
                  .flat()
            )
        )        
        const classNameOptions = Array.from(new Set(classesData.filter((classR) => classR.name && classR.name.length > 0).map((classR) => classR.name)))
        const dayNames = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']


        //handle search - ignores the fields that aren't filled
        const handleSearch = () => {
            const dayIndex = dayNames.findIndex((day) => day === searchWeekDay)+2 //monday has index 0 but is day 2 of week, if its empty: -1+2=1

            const filtered = classesData.filter((classR) => {
                //filters to find the search for name, day of week, year, professor and course
                const isNameMatch = !searchName || classR.name.toLowerCase().includes(searchName.toLowerCase())
                //if I don't choose a day it will be 1 because -1+2=1
                const isDayMatch = dayIndex === 1 || classR.day === dayIndex;
                const isYearMatch = !searchCourseYear || classR.courses.some((course) => //filter the year in the array of courses 
                    course.year && course.year === searchCourseYear)
                const isProfessorMatch = !searchProfessor || classR.professors.includes(searchProfessor)
                const isCourseMatch = !searchCourse || classR.courses.some((course) => //filter the course in the array of courses 
                    course.course && course.course.toLowerCase() === searchCourse.toLowerCase())
                const hasNonEmptyCourses = classR.courses.length > 0
              
            //dont return empty course if I'm filtering for one
            if (searchCourse !== ""){
                return isNameMatch && isCourseMatch && hasNonEmptyCourses && isYearMatch && isProfessorMatch && isDayMatch
            }else{
                return isNameMatch && isCourseMatch && isYearMatch && isProfessorMatch && isDayMatch
            }
            })

            setFilteredClass(filtered)
        }
          

    return (
        <Box p={3}>
                <Box mb={2}>
                    <Grid container spacing={2}>
                        {/* Field for name of class */}
                  
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-name">Nome do Curso</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="Course"
                            value={searchCourse}
                            onChange={(e) => setSearchCourse(e.target.value)}
                            inputProps={{
                                name: 'course',
                                id: 'course-select',
                            }}
                        >
                            <MenuItem value="">Todos</MenuItem> 
                            {classCourseOptions.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/* Class NAME */}
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-name">Nome da Cadeira</InputLabel>
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
                            {classNameOptions.sort((a, b) => a.localeCompare(b)).map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/* Professor*/}
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-name">Professor da Cadeira</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="Professor"
                            value={searchProfessor}
                            onChange={(e) => setSearchProfessor(e.target.value)}
                            inputProps={{
                                name: 'professor',
                                id: 'professor-select',
                            }}
                        >
                            <MenuItem value="">Todos</MenuItem> 
                            {classProfessorOptions.sort((a, b) => a.localeCompare(b)).map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/* Year */}
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-name">Ano da Cadeira</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="Year"
                            value={searchCourseYear}
                            onChange={(e) => setSearchCourseYear(e.target.value)}
                            inputProps={{
                                name: 'year',
                                id: 'year-select',
                            }}
                        >
                            <MenuItem value="">Todos</MenuItem> 
                            {classYearOptions.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/* Week Day */}
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-name">Dia da Semana</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="weeDay"
                            value={searchWeekDay}
                            onChange={(e) => setSearchWeekDay(e.target.value)}
                        >
                            <MenuItem value="">Todos</MenuItem> 
                            {dayNames.map((name) => (
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
                    <SearchClassesResult data={filteredClass} dayNames={dayNames}/> 
                </Box>
            </Box>
    )
}

export default SearchClasses
