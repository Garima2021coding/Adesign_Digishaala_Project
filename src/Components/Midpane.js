import React from 'react';
import {Typography,Card,Box,Stack,Button} from '@mui/material';
function Midpane() {
    return (
        <Card sx = {{height:'480px', width:'400px', marginTop:'20px', borderRadius:'15px', border:'2px solid rgba(0, 0, 0, 0.2)'}} variant="outlined">
        <Typography sx={{color:'black', paddingTop:'20px', textAlign:'center', fontSize:'16px',fontWeight:'500'}}>
          You’re Currently on 1 Subject Subscription, upgrade license to avail more benefits!
        </Typography>
        <Card sx = {{height:'100px', width:'300px', mx:'20px'}} >
            <Box>
            <Typography sx={{color:'black'}}>Any Two Subjects</Typography>
            <Typography sx={{color:'black'}}> </Typography>
            </Box>
            <Box>
            <Stack spacing={1.8} direction="row">
                <Button sx={{backgroundColor: "#ffc400", ml:'2px', width:115,height:40}} variant="contained">Mathematics</Button>
                <Button  sx={{ fontFamily: 'Urbanist', mx:'20px', width:115,height:40}} variant="outlined">English</Button>
                <Button  sx={{ mx:'20px', width:115,height:40}} variant="outlined">Science</Button>
            </Stack>
            </Box>
        </Card>
      </Card>
    )
    
}
export default Midpane;
