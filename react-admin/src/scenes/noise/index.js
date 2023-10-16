import { Box, useTheme, Typography, Button } from '@mui/material'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { tokens } from '../../theme'
import StatBox from '../../components/StatBox'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import NoiseData from '../../data/NoiseData'

const Noise = ({ noiseData, calcAvgNoise }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const navigate = useNavigate()

  return (
    <Box m='20px'>
        <Header title='Ruído' subtitle='Dados do Ruído' />

        <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='15px'>
          {/*ROW 1*/}
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={ parseInt(calcAvgNoise) + ' dB'}
              subtitle='Média da Ruído'
              progress='0.75'
              increase='75%'
              icon={<MicOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={noiseData[0].decibel + ' dB'}
              subtitle={"Sensor " + noiseData[0].id}
              progress='0.75'
              increase='75%'
              icon={<MicOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={noiseData[1].decibel + ' dB'}
              subtitle={"Sensor " + noiseData[1].id}
              progress='0.75'
              increase='75%'
              icon={<MicOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={noiseData[2].decibel + ' dB'}
              subtitle={"Sensor " + noiseData[2].id}
              progress='0.75'
              increase='75%'
              icon={<MicOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>

          {/*ROW 2*/}
          <Box gridColumn='span 8' gridRow='span 2' backgroundColor={colors.primary[400]}>
            <Box mt='25px' padding='0 30px' display='flex' justifyContent='space-between' alignItems='center'>
              <Box>
                <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                  Ruído
                </Typography>
                <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                  Atual: {parseInt(calcAvgNoise)+ " dB"}
                </Typography>
              </Box>
            </Box>
            <Box height='250px' mt='-20px'>
              <NoiseData isDashboard={false} noiseData={noiseData} />
            </Box>
          </Box>

        </Box>

        <Box height='75vh'>
            {/*<NoiseChart />*/}
        </Box>
    </Box>
  )
}

export default Noise
