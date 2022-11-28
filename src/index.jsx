import React from 'react';
import { createRoot } from 'react-dom/client';

import PagesInfo from '@pages/index';

import './styles/index.css';

const prepare = async () => {
    if (import.meta.env.DEV) {
        const { worker } = await import('./api/APIServer.js');

        worker.start();
    }
};

prepare().then(() => {
    const container = document.getElementById('root');

    createRoot(container).render(
        <React.StrictMode>
            <PagesInfo />
        </React.StrictMode>,
    );
});
