import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase"
//Icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const Topbar = () => {
  //get theme from Material UI
  const theme = useTheme()
  //changing to color defined in theme.js
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      
      {/* Search Bar */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3xp">
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
        <IconButton type="button" sx={{p: 1}}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex" backgroundColor={colors.primary[400]}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (<LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Box>

      {/* <IconButton sx={{display: "flex"}}></IconButton> */}
    </Box>
  )
}

export default Topbar;
