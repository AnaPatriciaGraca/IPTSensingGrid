import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
//Global (bars)
import Topbar from '../src/scenes/global/Topbar'
import Sidebar from '../src/scenes/global/Sidebar'
//Pages
import Team from '../src/scenes/team'
import Invoices from '../src/scenes/invoices'
import Contacts from '../src/scenes/contacts'
import Form from '../src/scenes/form'
import Calendar from '../src/scenes/calendar'
import FAQ from '../src/scenes/faq'
import DashboardTest from '../src/scenes/dashboardTest'
import MapTomar from './scenes/mapTomar'
import MapAbrantes from './scenes/mapAbrantes'
import ServiceDetails from './scenes/serviceDetails'
import RoomStats from './scenes/roomStats'
import RoomReserv from './scenes/roomReserv'
import WorkerStats from './scenes/workerStats'
import WorkerSearch from './scenes/workerSearch'
import Geography from '../src/scenes/geography'
import Temperature from '../src/scenes/temperature'
import CurrentClasses from './scenes/currentClasses'
import Noise from '../src/scenes/noise'
import SchedulesServices from '../src/scenes/schedulesServices'

function App() {
  const [theme, colorMode] = useMode()


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
              <Route path="/" element={<DashboardTest />} />

              <Route path="/currentClasses" element={<CurrentClasses />} />
              {/* Mapa */}
              <Route path="/mapaTomar" element={<MapTomar />} />
              <Route path="/mapaAbrantes" element={<MapAbrantes />} />
              {/* Sensores */}
              <Route path="/temperature" element={<Temperature />} />
              <Route path="/noise" element={<Noise />} />
              {/* Serviços */}
              <Route path="/schedulesServices" element={<SchedulesServices />} />
              <Route path="/detalhesServicos" element={<ServiceDetails />} />
              {/* Salas */}
              <Route path="/estatisticasSalas" element={<RoomStats />} />
              <Route path="/reservasSalas" element={<RoomReserv />} />
              {/* Funcionários */}
              <Route path="/estatisticasFuncionarios" element={<WorkerStats />} />
              <Route path='/pesquisaFuncionarios' element={<WorkerSearch />} />
              {/* Equipamentos */}
              {/* Outros */}
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
