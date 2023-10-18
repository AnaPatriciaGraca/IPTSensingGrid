import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import 'react-pro-sidebar/dist/css/styles.css'
import { tokens } from '../../theme'
//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined'

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
                  src={`../../assets/ipt.jpg`}
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
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography variant="h6" color={colors.grey[400]} sx={{ m: "15px 0 5px 20px" }}>Mapa</Typography> */}
            <SubMenu variant="h6" label="Mapa" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Tomar"
                to="/mapaTomar"
                icon={<DomainOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Abrantes"
                to="/mapaAbrantes"
                icon={<DomainOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Sensores" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Temperatura"
                to="/temperatura"
                icon={<DeviceThermostatIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Ruído"
                to="/som"
                icon={<MicOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Estacionamento"
                to="/parking"
                icon={<LocalParkingOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            
            <SubMenu variant="h6" label="Serviços" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Horários"
                to="/schedulesServices"
                icon={<CalendarMonthOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Detalhes"
                to="/detalhesServicos"
                icon={<HandymanOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Cursos" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Cursos"
                to="/cursos"
                icon={<SchoolOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Cadeiras"
                to="/cadeiras"
                icon={<ClassOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Salas" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Estatísticas"
                to="/estatisticasSalas"
                icon={<SchoolOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Reservas"
                to="/reservasSalas"
                icon={<PendingActionsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Funcionários" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Estatísticas"
                to="/estatisticasFuncionarios"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pesquisa"
                to="/pesquisaFuncionarios"
                icon={<PersonSearchOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* <Item
                title="Horários & Férias"
                to="/horariosFerias"
                icon={<CalendarMonthOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </SubMenu>

            <SubMenu variant="h6" label="Equipamentos" sx={{ m: "15px 0 5px 20px" }}>
              <Item
                title="Estatísticas"
                to="/estatisticasEquipamentos"
                icon={<DesktopWindowsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Listagem / Alterações"
                to="/listagemEquipamentos"
                icon={<ScreenSearchDesktopOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Reparações & Problemas"
                to="/reparacoesEquipamentos"
                icon={<BuildOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu variant="h6" label="Outros" sx={{ m: "15px 0 5px 20px" }}>
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
            </SubMenu>

          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar