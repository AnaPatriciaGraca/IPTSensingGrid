import { Box } from '@mui/material'
import Header from '../../components/Header'
import NoiseChart from '../../components/NoiseChart'

const index = () => {
  return (
    <Box m='20px'>
        <Header title='NOISE CHART' subtitle='Simple noise chart' />
        <Box height='75vh'>
            <NoiseChart />
        </Box>
    </Box>
  )
}

export default index
