import React from 'react';
import { Provider } from 'react-redux';

import Form from 'app/components/Form/Form';
import store from 'app/store/store';

import './App.scss';

const App = () => (
    <Provider store={store}>
        <Form />
    </Provider>
);

export default App;
