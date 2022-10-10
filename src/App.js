import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Leftpane from './components/Leftpane'
import Midpane from './components/Midpane'
import Navbar from './components/Navbar'
import Rightpane from './components/Rightpane'
import Grid from '@mui/material/Grid';


import Card from '@mui/material/Card';
import {Button,Stack} from '@mui/material';


export default function FixedContainer() {
  return (
    <React.Fragment>
      <div width='100vw'> 
        <Navbar />
        <Box  >
          
          <Grid>
            <Grid container spacing={9}>
              <Grid item xs={3} >
              <Leftpane >
                
              </Leftpane>              
              </Grid>
              <Grid item xs={4}>
              <Midpane />
                
              </Grid>
              <Grid item xs={5}>
                <Rightpane />
              </Grid>
              
                
              
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  );
}
