import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const ConfirmationDialog = ({ isOpen, onClose, phrase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle color={colors.greenAccent[400]} fontWeight="bold" fontSize={16}>
        Confirmação
      </DialogTitle>
      <DialogContent>
        {phrase && (
          <Typography>
            {phrase}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="primary"
          sx={{
            background: colors.greenAccent[400],
            fontWeight: 'bold',
            fontSize: 12,
            '&:hover': {
              background: colors.greenAccent[600],
            },
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
