import * as React from 'react';
import Modal from 'react-modal';
import { Box, Typography, useTheme, Button, Card, CardContent, CardMedia } from '@mui/material';
import { tokens } from '../../theme';
import { useNavigate } from 'react-router-dom';


const ProfessorCard = ({ professor, isOpen, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


  const modalStyles = {
    content: {
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

  const handleClickToMap = () => {
    navigate("/mapaTomar", { state: { professorPlace: professor.gabinete } });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Professor Details"
      className="modal"
      style={modalStyles}
    >
      <Card sx={{backgroundColor: colors.blueAccent[900], }}>
        {/* Fotografia das pessoas */}
      {professor.foto && 
        <Box display="flex" justifyContent="center" alignItems="center" mt='20px'>
          <CardMedia
            sx={{ height: 100, width: 100 }}
            image={professor.foto}
            title={professor.nome}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          /> 
        </Box>
        } 
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center' mb='20px'>
            {professor.nome}
          </Typography>
          {/* PERSON EMAIL */}
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Email:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.email}
            </Typography>
          </Box>
          {/* PERSON GABINTE */}
          {professor.gabinete && <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Gabinete:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.gabinete}
            </Typography>
          </Box>}
          {/* PERSON TELEFONE */}
          {professor.telefone && <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Telefone:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.telefone}
            </Typography>
          </Box>}
          {/* PERSON UN DEP */}
          {professor.UD && <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Unidade Departamental:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.UD}
            </Typography>
          </Box>}
          {/* PERSON CAT Prof */}
          {professor.CAT_PRO && <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Categoria Profissional:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.CAT_PRO}
            </Typography>
          </Box>}
          {/* PERSON Entrada */}
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
              Ano Entrada:
            </Typography>
            <Typography variant="body2" color="text.secondary" ml="5px">
              {professor.ipt_desde_in}
            </Typography>
          </Box>
          {/* PERSON Saida - show only if the person is no longer working here*/}
          {(!professor.vinculo_ativo || professor.vinculo_ativo === 0) &&  (
            <Box display="flex" alignItems="center">
              <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
                Ano Saída:
              </Typography>
              
                <Typography variant="body2" color="text.secondary" ml="5px">
                  {professor.ipt_desde_out}
                </Typography>
            </Box>
            )}
            {/* PERSON Cargos - show only if there us text on the Fields*/}
            {professor.cargo1 && (
              <Box>
                <Typography variant="body2" color={colors.greenAccent[300]} sx={{ fontWeight: 'bold' }}>
                  Cargos:
                </Typography>
                <Typography variant="body2" color="text.secondary" ml="5px">
                  - {professor.cargo1}
                </Typography>
              </Box>
            )}
            {professor.cargo2 && (
              <Box>
                <Typography variant="body2" color="text.secondary" ml="5px">
                  - {professor.cargo2}
                </Typography>
              </Box>
            )}
            {professor.cargo3 && (
              <Box>
                <Typography variant="body2" color="text.secondary" ml="5px">
                  - {professor.cargo3}
                </Typography>
              </Box>
            )}

          




          
    
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="flex-end" mt='20px'>
        <Button onClick={handleClickToMap} sx={{bgcolor: colors.greenAccent[500], '&:hover': { bgcolor: colors.greenAccent[300]}, mr: "10px" }}>Ver no Mapa</Button>
        <Button onClick={onClose} sx={{bgcolor: colors.greenAccent[500], '&:hover': { bgcolor: colors.greenAccent[300] }}}>Fechar</Button>
      </Box>
    </Modal>
  );
};

export default ProfessorCard;
