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

export default function CambiosBasicModal() {
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
          <Typography id="modal-modal-title" variant="h7" component="h1" sx={{ mt: -5 }}>
            POLÍTICAS DE CAMBIO
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h2" sx={{ mt: 2 }}>
          El plazo de cambio es de treinta (30) días corridos contando a partir de la fecha en que recibiste tu compra. Podes realizarlo gratis en cualquier sucursal o por correo a cargo del comprador a traves de cualquier sucursal Andreani.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          • El producto debe estar sin uso y en perfecto estado.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          • El producto debe poseer sus etiquetas, envoltorios y todos los accesorios adicionales con los que fue adquirido.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          • En caso de realizar el cambio por correo el mismo debe estar envuelto en una bolsa negra o de papel madera perfectamente cerrado y con la etiqueta de Andreani(suministrada por mail) pegada en un lugar visible.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          • Al momento del cambio se debe tener la factura de compra o ticket de cambio.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}