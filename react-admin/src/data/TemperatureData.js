import TemperatureChart from "../components/TemperatureChart";
import { useEffect, useState } from 'react';
import { fetchTemperatureData } from '../data/getData';

const TemperatureData = ({ isDashboard }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    //data from API
    useEffect(() => {
      async function fetchData() {
      try {
          const sensors = await fetchTemperatureData(); 
          setData(sensors);
          setIsLoading(false);
      } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
      }
      }
      fetchData();
    }, []);


    //transform the data so it can show on the gragh
    const transformData = (data) => {
      const transformedData = data.map((sensor) => {
        const id = `${sensor.type} - ${sensor.id}`;
        const newData = sensor.history.map((value, index) => ({
          x: `${index.toString().padStart(2, '0')}:00`,
          y: value
        }));
        return {
          id,
          data: newData
        }
      })
    
      return transformedData
    }
      
    const TransformedData = transformData(data);


  return (
    
        <TemperatureChart data={TransformedData} isDashboard={isDashboard}/>
  )
}

export default TemperatureData
