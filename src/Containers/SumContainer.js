import React from 'react';

import { connect } from 'react-redux';
import { increaseCount } from '../common/action-creators';


import SumView from "../Views/SumView";


const SumContainer = ({ sum }) => {
    console.log('render SumContainer');
    return (
        <SumView sum={sum} />
    );
};


const mapStateToProps = ({ counterReducer: { counter }, usersReducer: { users } }) => {
    console.log('mapStateToProps SumContainer');
    return ({
        sum: users.length + counter
    });
};

const mapDispatchToProps = {
    increaseCountAction: increaseCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(SumContainer);
