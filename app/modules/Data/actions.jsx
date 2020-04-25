import { fetchData } from 'app/api/BaseAPI';
import loadingActionTypes from 'app/modules/Loading/actionTypes';

import actionTypes from './actionTypes';

const {
    FETCH_DATA,
} = actionTypes;

const {
    IS_LOADING,
} = loadingActionTypes;

const actions = {
    fetchData: query => dispatch => {
        dispatch({ type: IS_LOADING });
        fetchData(query)
            .then(data => {
                dispatch({
                    type: FETCH_DATA,
                    data,
                });
                dispatch({ type: IS_LOADING });
            })
            .catch(error => console.log(error));
    },
};

export default actions;
