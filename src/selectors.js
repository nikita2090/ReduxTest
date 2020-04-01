import { createSelector } from "reselect";

const getCounter = (state) => state.counterReducer.counter;
const getUsers = (state) => state.usersReducer.users;

const getSum = createSelector([getCounter, getUsers], (counter, users) => {
    console.log('calculate Sum');
    return users.length + counter;
});

export default getSum;