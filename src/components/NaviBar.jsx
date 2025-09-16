import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Component to hide AppBar on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navibar = ({ 
  brandName = "Learn Maths", 
  navItems = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Login", url: "/login" },
    { name: "About Me", url: "/maker" }
  ],
  position = "fixed",
  elevation = 4,
  ...props 
}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar 
        position={position} 
        elevation={elevation}
        sx={{ 
          backgroundColor: '#8894afff',
          color: 'text.primary',
          py: 1
        }}
      >
        <Toolbar>
          {/* Brand name/logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: isMobile ? 1 : 0,
            }}
          >
            {brandName}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop navigation items - shown on larger screens */}
          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Typography
                  key={item.name}
                  component="a"
                  href={item.url}
                  sx={{
                    mx: 2,
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          )}

          {/* Mobile menu - shown on smaller screens */}
          {isMobile && (
            <Box>
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.name} 
                    onClick={handleCloseNavMenu}
                    component="a"
                    href={item.url}
                  >
                    <Typography textAlign="center">{item.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navibar;