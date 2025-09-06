// components/CardGridLayout.jsx
import React from 'react';
import { Grid } from '@mui/material';

const CardGridLayout = ({ children, spacing = 2, className = '' }) => {
            return (
                <Grid container spacing={spacing} className={className}>
                    {React.Children.map(children, (child) => (
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            {child}
                        </Grid>
                    ))}
                </Grid>
            );
        };

export default CardGridLayout;