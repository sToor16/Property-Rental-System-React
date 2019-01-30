import axios from 'axios';
import {
    FETCH_PROPERTIES,
    FETCH_PROPERTIES_SUCCESS,
    FETCH_PROPERTY_BY_ID_INIT,
    FETCH_PROPERTY_BY_ID_SUCCESS
} from "./types";

const fetchPropertyByIdInit = () => {
    return {
        type: FETCH_PROPERTY_BY_ID_INIT

    }
};

const fetchPropertiesSuccess = (properties) => {
    return {
        type: FETCH_PROPERTIES_SUCCESS,
        properties
    }
};


export const fetchProperties = () => {

    return dispatch => {
        axios.get('http://localhost:3000/server/properties')
            .then((res) => {
                return res.data;
            })
            .then((properties) => {
                dispatch(fetchPropertiesSuccess(properties))
            })
    }

};


export const fetchPropertyById = (propertyId) => {

    return function (dispatch) {
        dispatch(fetchPropertyByIdInit());

        axios.get(`http://localhost:3000/server/properties/${propertyId}`)
            .then((res) => {
                return res.data
            })
            .then((property) => {
                dispatch(fetchPropertyByIdSuccess(property));
            })
    }
};


const fetchPropertyByIdSuccess = (property) => {
    return {
        type: FETCH_PROPERTY_BY_ID_SUCCESS,
        property
    }
};