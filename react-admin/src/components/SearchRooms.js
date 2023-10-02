import { Box, Typography, MenuItem, Select, TextField, Button, Grid, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { fetchRoomsData } from '../data/getData'; // Import the function
import SearchResult from './SearchResult';

const Rooms = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [rooms, setRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchName, setSearchName] = useState('');
    const [searchFunction, setSearchFunction] = useState('');
    const [searchProjector, setSearchProjector] = useState('')
    const [searchMaxCapacity, setSearchMaxCapacity] = useState('');
    const [searchIsOccupied, setSearchIsOccupied] = useState('');
    const [filteredRooms, setFilteredRooms] = useState([]);

    //Get the data from the API
    useEffect(() => {
        async function fetchData() {
        try {
            const data = await fetchRoomsData(); // Call the function from getData.js
            setRooms(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    const roomNameOptions = Array.from(new Set(rooms.filter((room) => room.name && room.name.length > 0).map((room) => room.name)))
    const roomFunctionOptions = Array.from(new Set(rooms.filter((room) => room.function && room.function.length > 0).map((room) => room.function)))
    const roomProjectorOptions = [0, 1, 2]


    //handle search - ignores the fields that aren't filled
    const handleSearch = () => {
        const filtered = rooms.filter((room) => {
            
            return (
                (!searchName || String(room.name).toLowerCase().includes(searchName.toLowerCase())) &&
                (!searchFunction || String(room.function).toLowerCase().includes(searchFunction.toLowerCase())) &&
                (!searchProjector || room.projector.toString().includes(searchProjector)) &&
                (!searchMaxCapacity || room.maxCapacity.toString().includes(searchMaxCapacity)) &&
                (!searchIsOccupied || room.isOccupied.toString().includes(searchIsOccupied))
            );
        });
        setFilteredRooms(filtered);
    };
    

    return (
        <Box p={3}>
                <Box mb={2}>
                    <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-name">Nome da Sala</InputLabel>
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
                            <MenuItem value="">None</MenuItem> 
                            {roomNameOptions.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                 
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-function">Função da Sala</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="Function"
                            value={searchFunction}
                            onChange={(e) => setSearchFunction(e.target.value)}
                            inputProps={{
                                name: 'function',
                                id: 'function-select',
                            }}
                        >
                            <MenuItem value="">None</MenuItem> {/* Add an empty option */}
                            {roomFunctionOptions.map((roomFunction) => (
                                <MenuItem key={roomFunction} value={roomFunction}>
                                    {roomFunction}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-projectors">Quantidade de Projetores</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            label="Projector"
                            value={searchProjector}
                            onChange={(e) => setSearchProjector(e.target.value)}
                            inputProps={{
                                name: 'projector',
                                id: 'projector-select',
                            }}
                        >
                            <MenuItem value="">None</MenuItem> {/* Add an empty option */}
                            {roomProjectorOptions.map((projector) => (
                                <MenuItem key={projector} value={projector}>
                                    {projector}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-function">Capacidade da Sala</InputLabel>
                        <TextField
                        fullWidth
                        // options={roomMaxCapacityOptions}
                        variant="outlined"
                        label=""
                        value={searchMaxCapacity}
                        onChange={(e) => setSearchMaxCapacity(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                    <InputLabel htmlFor="search-function">Ocupada ou Desocupada</InputLabel>
                        <TextField
                        fullWidth
                        variant="outlined"
                        label=""
                        value={searchIsOccupied}
                        onChange={(e) => setSearchIsOccupied(e.target.value)}
                        />
                    </Grid>
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
                    {/* <ul>
                    {filteredRooms.map((room) => (
                        <li key={room.id}>
                        {room.name} - {room.projector} - {room.isOccupied}
                        </li>
                    ))}
                    </ul> */}
                    <SearchResult data={filteredRooms}/>
                </Box>
            </Box>
        )
}

export default Rooms
