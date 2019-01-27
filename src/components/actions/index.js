import {FETCH_PROPERTIES, FETCH_PROPERTY_BY_ID_INIT, FETCH_PROPERTY_BY_ID_SUCCESS} from "./types";

const properties = [
    {
        id: "2",
        propertyHeading: "Central Apartment",
        propertyDetails: "Skyline Views",
        propertyPrice: "340",
        bedroom: "3"
    },
    {
        id: "6",
        propertyHeading: "Side Apartment",
        propertyDetails: "Beach Views",
        propertyPrice: "310",
        bedroom: "1"
    }
];

const fetchPropertyByIdInit = () => {
    return {
        type: FETCH_PROPERTY_BY_ID_INIT

    }
}


export const fetchProperties = () => {

    return {
        type: 'FETCH_PROPERTIES',
        properties
    }
};


export const fetchPropertyById = (propertyId) => {

    return function(dispatch){
        dispatch(fetchPropertyByIdInit());
        setTimeout(()=> {
            const property = properties.find((property) => property.id === propertyId);
            dispatch(fetchPropertyByIdSuccess(property));
        }, 1000);

    }
};



const fetchPropertyByIdSuccess = (property) => {
    return {
        type: FETCH_PROPERTY_BY_ID_SUCCESS,
        property
    }
}