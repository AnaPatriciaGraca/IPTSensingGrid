import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
//Global (bars)
import Topbar from '../src/scenes/global/Topbar'
import Sidebar from '../src/scenes/global/Sidebar'
//Pages
import Team from '../src/scenes/team'
import DeviceList from './scenes/devices'
import Contacts from '../src/scenes/contacts'
import Form from '../src/scenes/form'
import Calendar from '../src/scenes/calendar'
import FAQ from '../src/scenes/faq'
import DashboardTest from '../src/scenes/dashboardTest'
import MapTomar from './scenes/mapTomar'
import MapAbrantes from './scenes/mapAbrantes'
import ServiceDetails from './scenes/serviceDetails'
import Course from './scenes/course'
import CourseDetails from './scenes/course/CourseDetails'
import Class from './scenes/class'
import RoomStats from './scenes/roomStats'
import RoomReserv from './scenes/roomReserv'
import WorkerStats from './scenes/workerStats'
import WorkerSearch from './scenes/workerSearch'
import Temperature from '../src/scenes/temperature'
import CurrentClasses from './scenes/currentClasses'
import Noise from '../src/scenes/noise'
import SchedulesServices from '../src/scenes/schedulesServices'
import { useState, useEffect } from 'react'
//data
import { fetchTemperatureData, fetchNoiseData } from './data/getData'

function App() {
  const [theme, colorMode] = useMode()
  const [tempData, setTempData] = useState([])
  const [noiseData, setNoiseData] = useState([])

    //data of tempreature from API
    useEffect(() => {
      async function fetchData() {
      try {
          const data = await fetchTemperatureData(); 
          setTempData(data)
      } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
      }
      }
      fetchData();
    }, []);

    //data of noise from API
    useEffect(() => {
      async function fetchData() {
      try {
          const data = await fetchNoiseData(); 
          setNoiseData(data)
      } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
      }
      }
      fetchData();
    }, []);

    //calc avg of temprature for all sensors
    const calcAvgTemperature = () => {
      if (!tempData || tempData.length === 0) {
        return 0
      }
      // sum of all temperatures
      const sum = tempData.reduce((total, sensor) => total + sensor.temperature, 0);
      // average temperature
      const average = sum / tempData.length;
      return average;
    }

    //calc avg of temprature for all sensors
    const calcAvgNoise = () => {
      if (!noiseData || noiseData.length === 0) {
        return 0
      }
      // sum of all temperatures
      const sum = noiseData.reduce((total, sensor) => total + sensor.decibel, 0);
      // average temperature
      const average = sum / noiseData.length;
      return average;
    }



  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Reset the CSS to defaults */}
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashboardTest tempData={tempData} calcAvgTemperature={calcAvgTemperature()} noiseData={noiseData} />} />

              <Route path="/currentClasses" element={<CurrentClasses />} />
              {/* Mapa */}
              <Route path="/mapaTomar" element={<MapTomar tempData={tempData} noiseData={noiseData} />} />
              <Route path="/mapaAbrantes" element={<MapAbrantes />} />
              {/* Sensores */}
              <Route path="/temperatura" element={<Temperature tempData={tempData} calcAvgTemperature={calcAvgTemperature()} />} />
              <Route path="/som" element={<Noise noiseData={noiseData} calcAvgNoise={calcAvgNoise()} />} />
              {/* Serviços */}
              <Route path="/schedulesServices" element={<SchedulesServices />} />
              <Route path="/detalhesServicos" element={<ServiceDetails />} />
              {/* Cursos */}
              <Route path="/cursos" element={<Course />} />
              <Route path="/cadeiras" element={<Class />} />
              <Route path="/detalhesCurso" element={<CourseDetails />} />
              {/* Salas */}
              <Route path="/estatisticasSalas" element={<RoomStats />} />
              <Route path="/reservasSalas" element={<RoomReserv />} />
              {/* Funcionários */}
              <Route path="/estatisticasFuncionarios" element={<WorkerStats />} />
              <Route path='/pesquisaFuncionarios' element={<WorkerSearch />} />
              {/* Equipamentos */}
              <Route path="/listagemEquipamentos" element={<DeviceList />} />
              {/* Outros */}
              <Route path="/team" element={<Team />} />
              
              <Route path="/form" element={<Form />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
