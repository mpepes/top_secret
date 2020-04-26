import React from 'react';
import { Provider } from 'react-redux';

import SearchInput from 'app/components/SearchInput/SearchInput';
import store from 'app/store/store';
import ContentContainer from 'app/components/Content/ContentContainer';
import ErrorBoundry from 'app/components/ErrorBoundry/ErrorBoundry';

import './App.scss';

const App = () => (
    <Provider store={store}>
        <ErrorBoundry>
            <SearchInput />
            <ContentContainer />
        </ErrorBoundry>
    </Provider>
);

export default App;
