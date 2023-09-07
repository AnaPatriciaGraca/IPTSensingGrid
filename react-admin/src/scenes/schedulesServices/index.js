import { Box } from '@mui/material'
import Header from '../../components/Header'
import GetScheduleData from '../../scripts/getScheduleData'

const index = () => {
  return (
    <Box m='20px'>
        <Header title='HORÁRIOS' subtitle='Horários do ano letivo' />
        <Box height='75vh'>
            <GetScheduleData />
        </Box>
    </Box>
  )
}

export default index
