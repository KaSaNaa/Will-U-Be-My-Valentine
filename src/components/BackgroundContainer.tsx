import React from 'react';
import { Box, Container } from '@mui/material';

const BackgroundContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: '100vw',
            height: '100vh',
            margin: 0,
            padding: 0,
            background: "red",
        }}>
            <Box sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                background: "#CF8AB5",
            }}>
                {children}
            </Box>
        </Container>
    );
};

export default BackgroundContainer;