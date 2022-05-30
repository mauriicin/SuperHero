import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import CardHero from '../CardHero';
import Loading from '../../components/Loading';

import createHeroApi from '../../api/Hero';

export default function CircularIndeterminate() {
  const [heroName, setHeroName] = useState('');
  const [error, setError] = useState('');
  const [heroData, setHeroData] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const HeroApi = createHeroApi();

  async function handleForm(e) {
    e.preventDefault();
    setError('');
    setHeroData({});
    setShowLoader(true);

    const response = await HeroApi.findByName(heroName);

    if (response.data.response === 'error') {
      setError('Hero does not exist in Database, try another one!');
      setShowLoader(false);
    } else if (response.data.response === 'success') {
      setHeroData(response.data.results);
      setShowLoader(false);
    }
  }
  const isObjectEmpty = (myObject) => {
    return Object.entries(myObject).length > 0;
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {!error ? (
          <></>
        ) : (
          <Alert sx={{ marginBottom: 5 }} severity="error">
            {error}
          </Alert>
        )}
        <form onSubmit={handleForm}>
          <TextField
            helperText="Look for a hero."
            label="Hero name"
            fullWidth
            value={heroName}
            onChange={(e) => setHeroName(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Search
          </Button>
        </form>
        {showLoader && <Loading />}
        {isObjectEmpty(heroData) && <CardHero data={heroData} />}
      </Box>
    </Container>
  );
}
