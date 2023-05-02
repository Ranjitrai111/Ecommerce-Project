import { Container, Drawer, Grid, Icon, ListItem,  Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export const DrawerCmp = () => {
    const [openDrawer,setOpenDrawer]=useState(false)
  return (
    <React.Fragment>
    <Container>

     
        <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
       
    
  


        

    
    
    <Grid item >
        <ListItem >
        <Link to='/'>
          <Typography
            variant="h6"
            padding={2}
            // noWrap
            component="div"
            // sx={{ display: { xs: 'block' } }}
          > Home
          </Typography>
          </Link>
        </ListItem>
        </Grid>
        <Grid item>
        <ListItem >
        <Link to='/Body'>
          <Typography 
            variant="h6"
            padding={2}
            // noWrap
            component="div"
            // sx={{ display: { xs: 'block' } }}
          > Product
          </Typography>
          </Link>
        </ListItem>
        </Grid>

        <Grid item>
        <ListItem> 
        <Typography
            variant="h6"
            padding={2}
            // noWrap
            component="div"
            // sx={{ display: { xs: 'block' } }}
          > About
          </Typography>
        </ListItem>
        </Grid>

        <Grid item>
        <ListItem>
        <Typography
            variant="h6"
            padding={2}
            // noWrap
            component="div"
            // sx={{ display: { xs: 'block' } }}
          > Contact
          </Typography>
        </ListItem> 
</Grid>


        </Drawer>
      
        <Icon style={{color:"white"}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </Icon>
        </Container>
    </React.Fragment>
  )
}