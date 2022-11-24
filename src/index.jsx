import React from 'react';
import ReactDOM from 'react-dom/client';

import PagesInfo from '@/pages/index';

import './styles/index.css';

const prepare = async () => {
    if (import.meta.env.NODE_ENV !== 'production') {
        const { worker } = await import('./api/APIServer.js');

        worker.start();
    }
};

prepare().then(() => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <PagesInfo />
        </React.StrictMode>,
    );
});
