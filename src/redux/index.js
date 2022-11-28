import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from '@remix-run/router';
import { connectRouter } from 'connected-react-router';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UserInfo } from './modules';

export const history = createBrowserHistory();

const middlewares = [thunk.withExtraArgument({ history })];

const reducers = combineReducers({
    UserInfo,
    router: connectRouter(history),
});

let store;

if (import.meta.env.PROD) {
    store = legacy_createStore(
        reducers,
        compose(applyMiddleware(...middlewares)),
    );
} else {
    middlewares.push(logger);

    store = legacy_createStore(
        reducers,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );
}

export default store;
