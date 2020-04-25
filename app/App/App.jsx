import React from 'react';
import { Provider } from 'react-redux';

import Form from 'app/components/Form/Form';
import store from 'app/store/store';
import ContentContainer from 'app/components/Content/ContentContainer';

import './App.scss';

const App = () => (
    <Provider store={store}>
        <Form />
        <ContentContainer />
    </Provider>
);

export default App;
