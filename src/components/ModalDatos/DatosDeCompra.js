import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Formulario from './Formulario';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid grey',
  boxShadow: 15,
  p: 10,
};

export default function DatosDeCompraModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> FINALIZAR COMPRA </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h7" component="h1" sx={{ mt: -5 }}>
            DATOS DEL COMPRADOR
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h2" sx={{ mt: 2 }}>
            FORMULARIO
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            <Formulario />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}