import { Box } from '@mui/material'
import Header from '../../components/Header'
import TemperatureChart from '../../components/TemperatureChart'
import { useEffect, useState } from 'react';
import { fetchTemperatureData } from '../../data/getData';
import TemperatureData from '../../data/TemperatureData'

const Temperature = () => {
  const [sensors, setSensors] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //data from API
  useEffect(() => {
    async function fetchData() {
    try {
        const data = await fetchTemperatureData(); 
        setSensors(data);
        setIsLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
    }
    fetchData();
  }, []);

  return (
    <Box m='20px'>
        <Header title='Temperatura' subtitle='Dados da temperatura' />
        <Box height='75vh'>
          <TemperatureData data={sensors}/>
            {/*<TemperatureChart />*/}
        </Box>

        
    </Box>
  )
}

export default Temperature
