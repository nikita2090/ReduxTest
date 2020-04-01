import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './common/store';

// import App from "./App"; // оптимизировано (деление на неск контейнеров)
import Container from "./Container"; // 1 контейнер

ReactDOM.render(
    <Provider store={store}>
        <Container />
        {/* <App /> */}
    </Provider>,
    document.getElementById('root')
);



