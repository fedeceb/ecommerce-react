import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>ver mas...</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h1">
            MEDIOS DE PAGO
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h2" sx={{ mt: 4 }}>
            Podés pagar en efectivo, débito y crédito.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            Tenes 3, 6 y 12 cuotas sin interés con todas las tarjetas de crédito bancarias Visa y Mastercard
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}