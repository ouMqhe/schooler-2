import React from 'react';
import { Box, Container, Grid, useTheme } from '@mui/material';

const MainLayout = ({ children, sections }) => {
  const theme = useTheme();

  const defaultSections = [
    { id: 'hero', bgColor: theme.palette.primary.main, height: '60vh' },
    { id: 'products', bgColor: theme.palette.background.paper },
    { id: 'about', bgColor: theme.palette.secondary.main },
    { id: 'gallery', bgColor: theme.palette.grey[100] },
    { id: 'contact', bgColor: theme.palette.primary.dark },
  ];

  const sectionConfig = sections || defaultSections;

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      {sectionConfig.map((section, index) => (
        <Box
          key={section.id}
          id={section.id}
          sx={{
            py: section.height ? 0 : 8,
            height: section.height || 'auto',
            minHeight: section.height ? '400px' : 'auto',
            backgroundColor: section.bgColor,
            display: 'flex',
            alignItems: section.height ? 'center' : 'flex-start',
            justifyContent: 'center',
            color: theme.palette.getContrastText(section.bgColor),
          }}
        >
          <Container maxWidth={section.id === 'contact' ? 'md' : 'lg'}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                {children && children[index] ? (
                  children[index]
                ) : (
                  <Box sx={{ textAlign: 'center' }}>
                    <h2>{section.id.charAt(0).toUpperCase() + section.id.slice(1)} Section</h2>
                    <p>Content will be placed here</p>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default MainLayout;