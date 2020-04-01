import React, { useMemo } from 'react';

import { connect } from 'react-redux';
import { increaseCount } from './common/action-creators';


import SumView from "./Views/SumView";


const UseContainer = ({ counter, users }) => {
    console.log('render SumContainer');
    /* const calcSum = useMemo(() => {
        console.log('calculate sum');
        return users.length + counter
    }, [ users, counter ]); */

    const calcSum = () => {
        console.log('calculate sum');
        return users.length + counter
    };

    return (
        <SumView sum={calcSum()} />
    );
};


const mapStateToProps = ({ counterReducer: { counter }, usersReducer: { users } }) => {
    console.log('mapStateToProps UseCounter');
    return ({
        counter,
        users,
    });
};


const mapDispatchToProps = {
    increaseCountAction: increaseCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(UseContainer);
