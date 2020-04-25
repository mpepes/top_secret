import actionTypes from './actionTypes';

const {
    FETCH_DATA,
    FETCH_ADDITIONAL_DATA,
} = actionTypes;

const fetchDataReducer = (state = {}, { type, data }) => {
    switch (type) {
        case FETCH_DATA:
            return data;

        case FETCH_ADDITIONAL_DATA:
            return '';

        default:
            return state;
    }
};

export default fetchDataReducer;
