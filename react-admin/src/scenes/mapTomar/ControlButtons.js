import React from 'react';
import { Box, Tooltip, IconButton, Typography } from '@mui/material'
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined'


const ControlButtons = ({ handleRoomClick, handleBuildClick, handleMyLocation, colors, handleTemperature }) => {
  return (
    <Box ml="10px" p={1}>
      {/*Botoes pra salas e edificios*/}
      <Typography mb="10px" variant='h5'>
        Salas e Edifícios
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box m="2px">
          <Tooltip title="Salas">
            <IconButton
              aria-label='Salas'
              color="primary"
              sx={{ backgroundColor: colors.primary[300], '&:hover': { backgroundColor: colors.primary[200] } }}
              onClick={handleRoomClick}
            >
              <MeetingRoomOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box m="2px">
          <Tooltip title="Edifícios">
            <IconButton
              aria-label='Edifícios'
              color="primary"
              sx={{ backgroundColor: colors.primary[300], '&:hover': { backgroundColor: colors.primary[200] } }}
              onClick={handleBuildClick}
            >
              <ApartmentOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box m="2px">
          <Tooltip title="Minha Localização">
            <IconButton
              aria-label='Minha Localização'
              color="primary"
              sx={{ backgroundColor: colors.primary[300], '&:hover': { backgroundColor: colors.primary[200] } }}
              onClick={handleMyLocation}
            >
              <LocationOnOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {/*Botoes sensores*/}
      <Typography mb="10px" mt="10px" variant='h5'>
        Sensores
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box m="2px">
          <Tooltip title="Temperatura">
            <IconButton
              aria-label='Temperatura'
              color="primary"
              sx={{ backgroundColor: colors.primary[300], '&:hover': { backgroundColor: colors.primary[200] } }}
              onClick={handleTemperature}
            >
              <DeviceThermostatIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box m="2px">
          <Tooltip title="Ruído">
            <IconButton
              aria-label='Ruído'
              color="primary"
              sx={{ backgroundColor: colors.primary[300], '&:hover': { backgroundColor: colors.primary[200] } }}
              
            >
              <MicOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box m="2px">
          <Tooltip title="Estacionamento">
            <IconButton
              aria-label='Estacionamento'
              color="primary"
              sx={{ backgroundColor: colors.primary[300], '&:hover': { backgroundColor: colors.primary[200] } }}
              
            >
              <LocalParkingOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        
      </Box>


    </Box>
  );
};

export default ControlButtons;
