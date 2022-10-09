import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Leftpane from './Components/Leftpane'
import Grid from '@mui/material/Grid';


export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#3f50b5', height: '10vh' }} />
        <Box>
          <Grid>
            <Grid container spacing={1}>
              <Grid item xs={3}>
              <Leftpane>
                
                </Leftpane>              
              </Grid>
              <Grid item xs={4}>
                
              </Grid>
              <Grid item xs={5}>
                
              </Grid>
              
                
              
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
