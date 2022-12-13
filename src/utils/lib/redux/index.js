import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import {
    createRouterMiddleware,
    createRouterReducer,
} from '@lagunovsky/redux-react-router';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UserInfo } from './modules';

export const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);

const middlewares = [thunk.withExtraArgument({ history }), routerMiddleware];

const reducers = combineReducers({
    UserInfo,
    navigator: createRouterReducer(history),
});

let store;

export const routerSelector = (state) => state.navigator;

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
