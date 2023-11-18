import { Box, useTheme, Typography, Button } from '@mui/material'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { tokens } from '../../theme'
import StatBox from '../../components/StatBox'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import BatteryLevel from '../../components/BatteryLevel'
import NoiseData from '../../data/NoiseData'

const Noise = ({ noiseData, calcAvgNoise }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const navigate = useNavigate()

  //navigation to the map
  const handleButtonClick = () => {
    const showNoiseSensors = true
    navigate('/mapaTomar', { state: { showNoiseSensors } } );
  }

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
              subtitle={noiseData[0].description}
              progress='0.75'
              increase='75%'
              icon={<MicOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={noiseData[1].decibel + ' dB'}
              subtitle={noiseData[1].description}
              progress='0.75'
              increase='75%'
              icon={<MicOutlinedIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}
            />
          </Box>
          <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
            <StatBox 
              title={noiseData[2].decibel + ' dB'}
              subtitle={noiseData[2].description}
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
              <NoiseData noiseData={noiseData} />
            </Box>
          </Box>

          <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]}>
            <Box mt='25px' padding='0 30px' display='flex' justifyContent='space-between' alignItems='center'>
              <Box>
                <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                  Níveis de bateria dos sensores
                </Typography>
                <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                  Bateria
                </Typography>
              </Box>
            </Box>
            <Box height='250px' mt='-20px'>
              <BatteryLevel data={noiseData} />
            </Box>
          </Box>

          {/* ROW 3 */}
          <Box gridColumn='span 4' gridRow='span 1' backgroundColor={colors.primary[400]}>
              <Typography variant='h5' fontWeight='600' sx={{p: '30px 30px 0 30px'}} mb="10px">
                Ver no Mapa
              </Typography>
              <Box display="flex" justifyContent="center" flexGrow={1}>
                <Button
                    variant='contained'
                    onClick={handleButtonClick}
                    sx={{
                    backgroundColor: colors.blueAccent[500],
                    width: '40%', 
                    height: '50px', 
                    fontSize: '0.8rem', 
                    }}
                >
                    Mapa
                </Button>
              </Box>
          </Box>


        </Box>
    </Box>
  )
}

export default Noise
