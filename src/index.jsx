import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import store from '@reduxConfig';

import PagesInfo from '@pages/index';

import { customTheme } from '@styles/theme';

import '@styles/index.css';
import 'nprogress/nprogress.css';

const prepare = async () => {
    if (import.meta.env.DEV) {
        const { worker } = await import('./api/APIServer.js');

        worker.start();
    }
};

prepare().then(() => {
    const container = document.getElementById('root');
    const theme = customTheme();

    createRoot(container).render(
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Provider store={store}>
                        <PagesInfo />
                    </Provider>
                </ThemeProvider>
            </StyledEngineProvider>
        </React.StrictMode>,
    );
});
