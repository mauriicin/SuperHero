import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ModalDetails from '../ModalDetails';

export default function CardHero({ data, index }) {
  const [modalShow, setModalShow] = useState(false);
  const [modalSelected, setModalSelected] = useState(0);

  const openModal = (id) => {
    setModalShow(true);
    setModalSelected(id);
  };

  const closeModal = () => {
    setModalShow(true);
    setModalSelected(0);
  };

  return (
    <Container key={index}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 2,
          flexWrap: 'wrap',
        }}
      >
        {data.map((hero, index) => (
          <Card key={index} sx={{ width: 345, marginLeft: 2, marginBottom: 2 }}>
            <CardMedia
              component="img"
              height="250"
              image={hero.image.url}
              alt={hero.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hero.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender: {hero.appearance.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Race: {hero.appearance.race}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Publisher: {hero.biography.publisher}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => openModal(hero.id)}>More details</Button>
              <ModalDetails
                data={hero}
                show={modalShow && modalSelected === hero.id}
                handleClose={() => closeModal()}
              />
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
