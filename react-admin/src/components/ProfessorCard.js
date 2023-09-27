import * as React from 'react';
import Modal from 'react-modal';
import { Box, Typography, useTheme, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { tokens } from '../theme';


const ProfessorCard = ({ professor, isOpen, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(professor)

  const modalStyles = {
    content: {
      // width: '40%',
      maxWidth: '600px',
      margin: '10% 35%',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
      background: colors.blueAccent[900],
      padding: '20px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Professor Details"
      className="modal"
      style={modalStyles}
    >
      <Card sx={{backgroundColor: colors.blueAccent[900]}}>
        {/* <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center' mb='20px'>
            {professor.nome}
          </Typography>
          {/* PROFESSOR EMAIL */}
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Email:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.email}
            </Typography>
          </Box>
          {/* PROFESSOR GABINTE */}
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Gabinete:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.gabinete}
            </Typography>
          </Box>
          {/* PROFESSOR LOCALIZAÇÃO */}
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Localização:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.cidade}
            </Typography>
          </Box>

          {/* PROFESSOR CURSOS */}
          <Typography variant="body2" color={colors.greenAccent[300]} mt="10px" sx={{ fontWeight: 'bold' }}>
              Cursos:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {professor.curso.join(', ')}
          </Typography>
          {/* PROFESSOR DISCIPLINAS */}
          <Typography variant="body2" color={colors.greenAccent[300]} mt="10px" sx={{ fontWeight: 'bold' }}>
              Disciplinas:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {professor.disciplina.join(', ')}
          </Typography>
          {/* PROFESSOR DETALHES */}
          <Typography variant="body2" color={colors.greenAccent[300]} mt="10px" sx={{ fontWeight: 'bold' }}>
              Detalhes:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {professor.outros.join(', ')}
          </Typography>
    
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="flex-end" mt='20px'>
        <Button onClick={onClose} sx={{bgcolor: colors.greenAccent[400]}}>Close</Button>
      </Box>
    </Modal>
  );
};

export default ProfessorCard;
