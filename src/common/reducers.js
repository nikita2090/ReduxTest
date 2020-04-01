import { combineReducers } from 'redux';
import { INCREASE_COUNT, INCREASE_FREECOUNT, } from "./actions";


const counterInitialState = {
    counter: 0,
    freeCounter: 10,
};

const counterReducer = (state = counterInitialState, { type, data }) => {
    switch (type) {
        case INCREASE_COUNT:
            return {
                ...state,
                counter: data,
            };
        case INCREASE_FREECOUNT:
            return {
                ...state,
                freeCounter: data,
            };

        default:
            return state;
    }
};


const usersInitialState = {
    users: [
        {
            name: 'Vasia',
            age: 42,
        },
        {
            name: 'Petya',
            age: 25,
        },
        {
            name: 'Ololo',
            age: 15,
        },
    ],
};

const usersReducer = (state = usersInitialState, { type }) => {
    switch (type) {
        default:
            return state;
    }
};


const rootReducer = combineReducers({ counterReducer, usersReducer });

export default rootReducer;