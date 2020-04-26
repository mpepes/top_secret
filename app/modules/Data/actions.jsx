import { batch } from 'react-redux';

import {
    fetchData,
    fetchAdditionalData,
} from 'app/api/BaseAPI';
import loadingActionTypes from 'app/modules/Loading/actionTypes';
import {
    getSearchQuery,
    getDataByType,
} from 'app/modules/Data/selectors';
import { DataProvider } from 'app/constants/DataProvider';
import errorActionTypes from 'app/modules/Error/actionTypes';

import actionTypes from './actionTypes';

const {
    FETCH_DATA,
    FETCH_ADDITIONAL_DATA,
} = actionTypes;

const {
    IS_LOADING,
} = loadingActionTypes;

const {
    IS_ERROR,
} = errorActionTypes;

const actions = {
    fetchData: query => dispatch => {
        dispatch({ type: IS_LOADING });
        fetchData(query)
            .then(data => {
                batch(() => {
                    dispatch({
                        type: FETCH_DATA,
                        data,
                    });
                    dispatch({ type: IS_LOADING });
                });
            })
            .catch(() => {
                dispatch({ type: IS_ERROR });
            });
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
                batch(() => {
                    dispatch({
                        type: FETCH_ADDITIONAL_DATA,
                        data,
                    });
                    dispatch({type: IS_LOADING});
                });
            })
            .catch(() => {
                dispatch({ type: IS_ERROR });
            });
    },
};

export default actions;
