import React from 'react';
import './common/App.css';

import CounterContainer from "./Containers/CounterContainer";
import UsersContainer from "./Containers/UsersContainer";
import SumContainer from "./Containers/SumContainer";
import FreeCounterContainer from "./Containers/FreeCounterContainer";
//import ReselectSum from "./ReselectSum";
//import UseCounter from "./UseCounter";


const App = () => {
    console.log('RENDER APP');
    console.log('-----------------------------');
    return (
        <div className="App">
            <h1>APP</h1>
            <CounterContainer />
            <hr />
            <UsersContainer />
            <hr />
            <SumContainer />
            {/* <ReselectSum /> */}
            {/* <UseCounter /> */}
            <hr />
            <FreeCounterContainer />
        </div>
    );
};

export default App;
