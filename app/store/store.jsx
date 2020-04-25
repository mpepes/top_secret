import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    rootReducer, /* preloadedState, */ composeEnhancers(
        applyMiddleware(thunkMiddleware),
    ),
);

export default store;
