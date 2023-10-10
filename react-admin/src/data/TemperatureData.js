import TemperatureChart from "../components/TemperatureChart";

const TemperatureData = ({ data }) => {

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
    
        <TemperatureChart data={TransformedData}/>
  )
}

export default TemperatureData
