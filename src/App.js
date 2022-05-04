import * as React from 'react';
import { Grid } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
    <Grid>
      <Header />
      <Home />
    </Grid>
    </>
  );
}

export default App;
