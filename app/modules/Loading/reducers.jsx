import actionTypes from './actionTypes';

const {
    IS_LOADING,
} = actionTypes;

const isLoadingReducer = (state = false, { type }) => {
    if (type === IS_LOADING) {
        return !state;
    }

    return state;
};

export default isLoadingReducer;
