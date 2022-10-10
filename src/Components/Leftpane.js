import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';





function Leftpane() {

    return (
        <Box sx={{backgroundColor:'#F7F8F9', height:'100vh'}}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#F7F8F9',color: '#1E232C' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                
                <ListItem>
                    <ListItemAvatar sx={{marginTop:'5px'}}>
                        <AccountCircleOutlinedIcon />
                        
                    </ListItemAvatar>
                    <ListItemText primary="Profile" />
                </ListItem>
                
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Subscriptions" />
                </ListItem>
                
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Schedule" />
                </ListItem>
            </List>
        </Box>
    )


}
export default Leftpane;

