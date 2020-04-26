import {
    fetchData,
    fetchAdditionalData,
} from 'app/api/BaseAPI';
import loadingActionTypes from 'app/modules/Loading/actionTypes';
import {
    getSearchQuery,
    getDataByType,
} from 'app/modules/Data/selectors';
import {
    DataProvider,
    PageSize,
} from 'app/constants/DataProvider';

import actionTypes from './actionTypes';

const {
    FETCH_DATA,
    FETCH_ADDITIONAL_DATA,
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

    fetchAdditionalData: type => (dispatch, getState) => {
        dispatch({ type: IS_LOADING });
        const state = getState();
        const query = getSearchQuery(state);
        const data = getDataByType(state, type);
        const isGiphy = type === DataProvider.GIPHY;
        const itemsCount = data.items.length;
        let extraParam;

        if (isGiphy) {
            extraParam = `offset=${itemsCount}`;
        } else {
            const page = (itemsCount / 20) + 1;
            extraParam = `page=${page}`;
        }

        fetchAdditionalData(query, extraParam)
            .then(data => {
                dispatch({
                    type: FETCH_ADDITIONAL_DATA,
                    data,
                });
                dispatch({ type: IS_LOADING });
            });
    },
};

export default actions;
