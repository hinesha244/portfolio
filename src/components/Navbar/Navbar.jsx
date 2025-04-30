import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ mode, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'Skills', 'Projects', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item}>
          <Link
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item} sx={{ cursor: 'pointer', color: theme.palette.text.primary }} />
          </Link>
        </ListItem>
      ))}
      <ListItem>
        <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1, color: theme.palette.text.primary }}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ background: theme.palette.background.paper, color: theme.palette.text.primary, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
          Portfolio
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <div>
            {menuItems.map((item) => (
              <Button
                color="inherit"
                key={item}
                component={Link}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{ color: theme.palette.text.primary }}
              >
                {item}
              </Button>
            ))}
            <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1, color: theme.palette.text.primary }}>
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 