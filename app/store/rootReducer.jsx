import { combineReducers } from 'redux';

import isLoadingReducer from 'app/modules/Loading/reducers';
import fetchDataReducer from 'app/modules/Data/reducers';
import isErrorReducer from 'app/modules/Error/reducers';

export default combineReducers({
    isLoading: isLoadingReducer,
    data: fetchDataReducer,
    isError: isErrorReducer,
});
