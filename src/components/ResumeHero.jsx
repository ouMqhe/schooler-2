import React from 'react';
import { Grid, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const HeroSection = ({ 
  name = "Your Name",
  profession = "Your Profession",
  description = "A brief description about yourself and your professional background. Highlight your skills and experience.",
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  socialLinks = {
    linkedin: "#",
    github: "#",
    email: "#"
  }
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{ 
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
        px: 2,
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        justifyContent="center"
        sx={{ maxWidth: 1200, margin: '0 auto' }}
      >
        {/* Image Column */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: 250,
              height: 250,
              margin: '0 auto',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `4px solid ${theme.palette.secondary.main}`,
              boxShadow: theme.shadows[10],
              [theme.breakpoints.up('md')]: {
                width: 300,
                height: 300,
              }
            }}
          >
            <img
              src={imageUrl}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>

        {/* Information Column */}
        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: theme.palette.secondary.main,
              }}
            >
              {name}
            </Typography>
            
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 3,
                color: theme.palette.grey[300],
              }}
            >
              {profession}
            </Typography>
            
            <Typography 
              variant="body1" 
              paragraph
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                maxWidth: '600px',
                margin: isMobile ? '0 auto' : 'inherit',
                mb: 4,
                color: theme.palette.grey[200],
              }}
            >
              {description}
            </Typography>
            
            {/* Social Links */}
            <Box sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<LinkedIn />}
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
              >
                LinkedIn
              </Button>
              
              <Button
                variant="contained"
                color="secondary"
                startIcon={<GitHub />}
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
              >
                GitHub
              </Button>
              
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Email />}
                href={`mailto:${socialLinks.email}`}
                size="large"
              >
                Email
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;