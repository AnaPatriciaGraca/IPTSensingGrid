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
// import Bar from '../src/scenes/bar'
// import Line from '../src/scenes/line'
// import Pie from '../src/scenes/pie'
// import Geography from '../src/scenes/geography'

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
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
