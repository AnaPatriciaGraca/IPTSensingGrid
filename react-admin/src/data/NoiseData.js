import NoiseChart from "../components/NoiseChart";

const NoiseData = ({ noiseData, isDashboard }) => {

  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const transformedData = noiseData.map((sensor) => {
    const dataEntry = {
      id: `${sensor.description}`,
      decibel: sensor.decibel,
    };

    hours.forEach((hour, index) => {
      dataEntry[hour] = sensor.history[index];
    });

    return dataEntry
  })


  return (
    <NoiseChart data={transformedData} />
  )
}

export default NoiseData;
