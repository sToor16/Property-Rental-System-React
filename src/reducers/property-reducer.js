import {FETCH_PROPERTIES, FETCH_PROPERTY_BY_ID_SUCCESS, FETCH_PROPERTY_BY_ID_INIT} from "../components/actions/types";


const INITIAL_STATE = {
    properties: {
        data: []
    },
    property: {
        data: {}
    }
};

export const propertyReducer = (state= INITIAL_STATE.properties, action) => {
    switch(action.type){
        case FETCH_PROPERTIES:
            return {...state, data: action.properties}
        default:
            return state;
    }
};

export const selectedPropertyReducer = (state= INITIAL_STATE.property, action) => {
    switch(action.type){
        case FETCH_PROPERTY_BY_ID_INIT:
            return {...state, data: {}};
        case FETCH_PROPERTY_BY_ID_SUCCESS:
            return {...state, data: action.property};
        default:
            return state;
    }
};