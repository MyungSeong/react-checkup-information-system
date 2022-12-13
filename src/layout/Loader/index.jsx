import { useEffect } from 'react';
import { Box, CircularProgress, useTheme } from '@mui/material';
import NProgress from 'nprogress';
import styled from 'styled-components';

const Loader = () => {
    const theme = useTheme();

    NProgress.configure({
        showSpinner: false,
        easing: 'ease',
        speed: 700,
        mininum: 0.1,
    });

    useEffect(() => {
        NProgress.start();

        return () => {
            NProgress.done();
        };
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <LoadingContainer>
                    <CircularProgress />
                </LoadingContainer>
            </Box>
        </>
    );
};

const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
`;

export default Loader;
