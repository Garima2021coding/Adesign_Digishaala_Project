
import * as React from 'react';
import {Button,Box} from '@mui/material';
import Image from '../images/Liveolympiadlogo.png';

function Navbar() {
    return(

        <Box sx={{ backgroundColor:'#4545A5', height: '100px', display:'flex', alignItems:'center'}}>
        <Box sx={{marginLeft:'40px', width:'200px',height:'5vh'}}>
        <img src= {Image} alt="Logo"  />
        </Box>
        <Button sx={{color:'white', marginLeft:'800px', height:'30px'}} variant='outlined'>Free Plan</Button>
        
        
        </Box>
    )
}
export default Navbar;
