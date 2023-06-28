import { List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, IconButton, Typography, Drawer, Box } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const Layout = ({ children, isDrawerOpen, handleDrawerToggle }:any) => {

  const drawerContent = (
    <div>
      <List>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            App Title
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: (theme) => theme.spacing(3),
          marginTop: '64px', // Ajuster pour l'AppBar fixe
        }}
      >
        {/* Ajoutez votre contenu principal ici */}
        {children}
      </Box>
    </>
  );
};


export default Layout;