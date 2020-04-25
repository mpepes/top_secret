import { combineReducers } from 'redux';

import isLoadingReducer from 'app/modules/Loading/reducers';
import fetchDataReducer from 'app/modules/Data/reducers';

export default combineReducers({
    isLoading: isLoadingReducer,
    data: fetchDataReducer,
});
