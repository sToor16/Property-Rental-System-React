import * as redux from "redux";
import { propertyReducer, selectedPropertyReducer } from "./property-reducer";
import thunk from 'redux-thunk';

export const init = () => {

    const reducer = redux.combineReducers({
        properties: propertyReducer,
        property: selectedPropertyReducer
    });

    const store = redux.createStore(reducer, redux.applyMiddleware(thunk));

    return store
}