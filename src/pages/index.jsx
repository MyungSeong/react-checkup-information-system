import { Fragment } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import Modal from 'react-modal';

import { BASENAME } from '@constants/Config';
import { history, routerSelector } from '@reduxConfig';
import routes from '@routes';

const PagesInfo = () => {
    const pages = routes.map((route, index) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return route.component ? (
            <Route
                key={index}
                path={route.path}
                element={
                    <Layout>
                        <Component />
                    </Layout>
                }
            />
        ) : null;
    });

    return (
        <ReduxRouter history={history} routerSelector={routerSelector}>
            <Routes>
                {pages}
                {/* <Redirect from='/' to={BASENAME} /> */}
            </Routes>
        </ReduxRouter>
    );
};

Modal.setAppElement('#root');

export default PagesInfo;
