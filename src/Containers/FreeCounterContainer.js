import React from 'react';

import { connect } from 'react-redux';
import { increaseFreeCount } from '../common/action-creators';

import CounterView from "../Views/CounterView";


const FreeCounterContainer = ({ freeCounter, increaseFreeCountAction }) => {
    console.log('render FreeCounterContainer');
    return (
        <CounterView counter={freeCounter} increaseCount={increaseFreeCountAction} />
    );
};


const mapStateToProps = ({ counterReducer: { freeCounter } }) => {
    console.log('mapStateToProps FreeCounter');
    return ({
        freeCounter,
    });
};

const mapDispatchToProps = {
    increaseFreeCountAction: increaseFreeCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(FreeCounterContainer);
