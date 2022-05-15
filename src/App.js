import React from 'react';
import './App.css';
import Carlist from './components/Carlist';
import { Box } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        <Carlist />
    </div>
  );
}

export default App;
