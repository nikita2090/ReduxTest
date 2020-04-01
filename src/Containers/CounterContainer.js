import React from 'react';

import { connect } from 'react-redux';
import { increaseCount } from '../common/action-creators';

import CounterView from "../Views/CounterView";


const CounterContainer = ({ counter, increaseCountAction }) => {
    console.log('render CounterContainer');
    return (
        <CounterView counter={counter} increaseCount={increaseCountAction} />
    );
};


const mapStateToProps = ({ counterReducer: { counter } }) => {
    console.log('mapStateToProps Counter');
    return ({
        counter,
    });
};

const mapDispatchToProps = {
    increaseCountAction: increaseCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
