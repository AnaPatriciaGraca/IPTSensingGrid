import { Box } from '@mui/material'
import Header from '../../components/Header'
import BarChart from '../../components/TotalFreeRooms'

const Bar = () => {
    return (
        <Box m='20px'>
            <Header title='BAR CHART' subtitle='Simple bar chart'/>
            <Box height='75vh'>
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar