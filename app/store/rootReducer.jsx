import { combineReducers } from 'redux';

import isLoadingReducer from 'app/modules/Loading/reducers';

export default combineReducers({
    isLoading: isLoadingReducer,
});
