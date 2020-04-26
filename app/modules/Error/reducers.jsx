import actionTypes from './actionTypes';

const {
    IS_ERROR,
} = actionTypes;

const isErrorReducer = (state = false, { type }) => {
    if (type === IS_ERROR) {
        return !state;
    }

    return state;
};

export default isErrorReducer;
