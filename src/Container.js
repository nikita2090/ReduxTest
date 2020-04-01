import React /*, { useMemo } */ from 'react';
import './common/App.css';

import { connect } from 'react-redux';
import { increaseCount, increaseFreeCount } from './common/action-creators';

import CounterView from "./Views/CounterView";
import UsersView from "./Views/UsersView";
import SumView from "./Views/SumView";

//import getSum from "./selectors";


const Container = ({ counter, users, sum, increaseCountAction, freeCounter, increaseFreeCountAction }) => {
    console.log('RENDER CONTAINER');

    /* const calcSum = useMemo(() => {
        console.log('calculate sum');
        return users.length + counter
    }, [ users, counter ]); */

    return (
        <div className="App">
            <h1>CONTAINER</h1>
            <CounterView counter={counter} increaseCount={increaseCountAction} />
            <hr />
            <UsersView users={users} />
            <hr />
            <SumView sum={sum} />
            <hr />
            <CounterView counter={freeCounter} increaseCount={increaseFreeCountAction} />
        </div>
    );
};


const mapStateToProps = (state) => {
    const { counterReducer: { counter, freeCounter }, usersReducer: { users } } = state;
    console.log('mapStateToProps Container');

    const calcSum = () => {
        console.log('render calcSum');
        return users.length + counter;
    };

    return ({
        counter,
        users,
        freeCounter,
        sum: calcSum(),
        //sum: getSum(state),
    });
};

const mapDispatchToProps = {
    increaseCountAction: increaseCount,
    increaseFreeCountAction: increaseFreeCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
