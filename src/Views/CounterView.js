import React from 'react';


const CounterView = ({ counter, increaseCount }) => {
    console.log('render CounterView');
    console.log('-----------------------------');

    const handleBtnClick = () => {
        increaseCount(counter + 1)
    };

    return (
        <div>
            <h3>CounterView</h3>
            <div>{counter}</div>
            <button onClick={handleBtnClick}>increase counter</button>
        </div>
    );
};

export default CounterView;