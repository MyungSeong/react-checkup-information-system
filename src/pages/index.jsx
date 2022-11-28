import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Modal from 'react-modal';

import { BASENAME } from '@constants/Config';
import { history } from '@reduxConfig';
import routes from '@routes';

const PagesInfo = () => {
    const pages = routes.map((route, index) => {
        return route.component ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
            />
        ) : null;
    });

    return (
        <>
            <ConnectedRouter history={history}>
                {pages}
                {/* <Redirect from='/' to={BASENAME} /> */}
            </ConnectedRouter>
        </>
    );
};

Modal.setAppElement('#root');

export default PagesInfo;
