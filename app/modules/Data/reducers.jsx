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
            const provider = data.provider;
            const newState = { ...state };
            newState.data[provider].items = newState.data[provider].items.concat(data.data);

            return newState;

        default:
            return state;
    }
};

export default fetchDataReducer;
