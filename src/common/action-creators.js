import { INCREASE_COUNT } from './actions';
import { INCREASE_FREECOUNT } from './actions';


export const increaseCount = (data) => ({
    type: INCREASE_COUNT,
    data
});

export const increaseFreeCount = (data) => ({
    type: INCREASE_FREECOUNT,
    data
});

