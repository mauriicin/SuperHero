import React from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function ModalDetails({ data, show, handleClose }) {
  return (
    <Modal
      key={data.id}
      open={show}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          minWidth: '50%',
        }}
      >
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {data.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                {data.biography['full-name']}
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            Alter Egos: {data.biography['alter-egos']}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Aliases: {data.biography['aliases']}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Place Of birth: {data.biography['place-of-birth']}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            First Appearance:
            {data.biography['first-appearance']}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Publisher: {data.biography['publisher']}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Alignment: {data.biography['alignment']}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="body1">
            Power Stats
          </Typography>
          <Typography gutterBottom variant="body2">
            Intelligence: {data.powerstats.intelligence}
          </Typography>

          <Typography gutterBottom variant="body2">
            Strength: {data.powerstats.strength}
          </Typography>

          <Typography gutterBottom variant="body2">
            Speed: {data.powerstats.speed}
          </Typography>

          <Typography gutterBottom variant="body2">
            Power: {data.powerstats.power}
          </Typography>

          <Typography gutterBottom variant="body2">
            Combat: {data.powerstats.combat}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
