import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';

import rootReducer from './rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    rootReducer, /* preloadedState, */ composeEnhancers(
        // eslint-disable-next-line no-underscore-dangle
        applyMiddleware(),
    ),
);

export default store;
