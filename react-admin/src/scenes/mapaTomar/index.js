import { Box } from '@mui/material'
import { tokens } from '../../theme'
import { useTheme } from '@mui/material'
import Header from '../../components/Header'
import Map from '../../components/Map'

function MapaTomar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const location = [39.599700, -8.39070]
    return (
        <Box m='20px'>
            <Header title="Tomar" subtitle="Mapa do polo de Tomar"/>
            <Map location={location}/>
        </Box>
    )
}

export default MapaTomar
