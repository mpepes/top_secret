import React from 'react';
import { Provider } from 'react-redux';

import SearchInput from 'app/components/SearchInput/SearchInput';
import store from 'app/store/store';
import ContentContainer from 'app/components/Content/ContentContainer';
import ErrorBoundary from 'app/components/ErrorBoundary/ErrorBoundary';

import './App.scss';

const App = () => (
    <Provider store={store}>
        <ErrorBoundary>
            <SearchInput />
            <ContentContainer />
        </ErrorBoundary>
    </Provider>
);

export default App;
