import { Box } from '@mui/material'
// import { tokens } from '../../theme'
// import { useTheme } from '@mui/material'
import Header from '../../components/Header'
import Map from '../../components/Map'

function MapaAbrantes() {
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    const location = [39.460625, -8.198494]
    return (
        <Box m='20px'>
            <Header title="Abrantes" subtitle="Em desenvolvimento"/>
            <Map location={location} locationTitle="Abrantes"/>
        </Box>
    )
}

export default MapaAbrantes
