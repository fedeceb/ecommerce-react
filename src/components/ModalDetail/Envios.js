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

export default function EnviosBasicModal() {
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
            ENVIOS
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 5 }}>ENVIOS GRATIS en compras superiores a $40.999.</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          PICKUP GRATIS EN SUCURSALES EN 24hs, podes ver las tiendas disponibles en el checkout.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          Envío express en 24hs a domicilio a través de Andreani. Solo válido para compras de domingos a jueves, unicamente para AMBA y CABA. Valor $379
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          Envíos estándar a domicilio. Tiempos estimados de entrega y valores según el destino:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            <li>CABA-GBA: Same day</li>
            <li>Rosario - La plata - Mar del plata: 1 día</li>
            <li>Córdoba: 2 días</li>
            <li>Interior: 4 días</li>
            <li>Patagonia: 5 días</li>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}