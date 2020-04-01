import React from 'react';

import { connect } from 'react-redux';
import { increaseCount } from "./common/action-creators";

import getSum from './selectors';

import SumView from "./Views/SumView";


const ReselectSum = ({ sum }) => {
    console.log('render SumContainer');
    return (
        <SumView sum={sum} />
    );
};


const mapStateToProps = (state) => {
    console.log('mapStateToProps SumContainer');
    return ({
        sum: getSum(state),
    });
};


const mapDispatchToProps = {
    increaseCountAction: increaseCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReselectSum);
