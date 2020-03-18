import {GET_DATA, UPDATE_DATA} from '../actions';

const initialState = {
    data: {
        Countries: []
    },
    isFetchingData: false,  
};

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
        case UPDATE_DATA:
            return {
                ...state,
                data: action.payload,
                isFetchingData: false
            }
            default:
            return state;
    }
};