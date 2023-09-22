import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import 'react-pro-sidebar/dist/css/styles.css'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected(title);
    navigate(to);
  }

  return (
    <MenuItem 
      active={selected === title}
      style={{
        color: colors.grey[200],
      }}
      onClick={handleClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};


const SideBar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };

  return (
    <Box sx={{
      '.ps-menu-root':{
        backgroundColor: colors.primary[400]
      },
      '.ps-sidebar-root':{
        borderWidth: '0px'
      },
      '.ps-sidebar-container':{
        backgroundColor: colors.primary[400]
      },
      '.ps-menubutton-root':{

      },
      '.ps-menu-button':{
        backgroundColor: colors.primary[400]
      },
      '.ps-menu-button:hover':{
        backgroundColor: '#6870fa !important',
      }
    }}>
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square" 
          menuItemStyles={{
            button: ({ level, active }) => {
              // only apply styles on first level elements of the tree
              if (level === 1)
                return {
                  backgroundColor: active ? '#6870fa' : undefined,
                };
            },
          }}
          
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[300],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]} >
                  IPT - SG
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  IPT
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[600]}>Sensing Grid</Typography>
              </Box>
            </Box>
          )}

            {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"} sx={{}}>
            {/* <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="Dashboard Teste"
              to="/dashboardTest"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography variant="h6" color={colors.grey[400]} sx={{ m: "15px 0 5px 20px" }}>Mapa</Typography> */}
            <SubMenu variant="h6" label="Mapa" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Tomar"
                to="/tomar"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Abrantes"
                to="/Abrantes"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Outros"
                to="/outros"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Sensores" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Temperatura"
                to="/temperature"
                icon={<DeviceThermostatIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Ruído"
                to="/noise"
                icon={<MicOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Estacionamento"
                to="/parking"
                icon={<MicOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            
            <SubMenu variant="h6" label="Serviços" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Horários"
                to="/schedulesServices"
                icon={<SchoolOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Detalhes"
                to="/detalhesServicos"
                icon={<SchoolOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Salas" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Estatísticas"
                to="/estatisticasSalas"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Reservas"
                to="/reservasSalas"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            
            <SubMenu variant="h6" label="Equipamentos" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Estatísticas"
                to="/estatisticasEquipamentos"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Listagem / Alterações"
                to="/listagemEquipamentos"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Reparações & Problemas"
                to="/ReparacoesEquipamentos"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Funcionários" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Estatísticas"
                to="/estatisticasFuncionarios"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Professores"
                to="/professores"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pesquisa"
                to="/pesquisaFuncionarios"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Horários & Férias"
                to="/horariosFerias"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Outros" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />




              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar