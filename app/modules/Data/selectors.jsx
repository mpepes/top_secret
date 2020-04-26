export const getData = state => state.data.data;
export const getSearchQuery = state => state.data.searchQuery;
export const getDataByType = (state, type) => state.data.data[type];
