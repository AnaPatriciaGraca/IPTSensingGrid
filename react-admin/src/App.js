import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
//Global (bars)
import Topbar from '../src/scenes/global/Topbar'
import Sidebar from '../src/scenes/global/Sidebar'
//Pages
import Dashboard from '../src/scenes/dashboard'
import Team from '../src/scenes/team'
import Invoices from '../src/scenes/invoices'
import Contacts from '../src/scenes/contacts'
import Form from '../src/scenes/form'
import Calendar from '../src/scenes/calendar'
import FAQ from '../src/scenes/faq'
import DashboardTest from '../src/scenes/dashboardTest'
import EstatisticasSalas from './scenes/estatisticasSalas'
import ReservasSalas from './scenes/reservasSalas'
// import Bar from '../src/scenes/bar'
// import Pie from '../src/scenes/pie'
// import Line from '../src/scenes/line'
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
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/dashboardTest" element={<DashboardTest />} />
              <Route path="/estatisticasSalas" element={<EstatisticasSalas />} />
              <Route path="/reservasSalas" element={<ReservasSalas />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              <Route path="/geography" element={<Geography />} />
              <Route path="/temperature" element={<Temperature />} />
              <Route path="/currentClasses" element={<CurrentClasses />} />
              <Route path="/noise" element={<Noise />} />
              <Route path="/schedulesServices" element={<SchedulesServices />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
