import React, { Component } from 'react';
import {PropertyCard} from "./propertyCard";

export class PropertyList extends Component {

    constructor() {
        super();

        this.state = {
            properties: [1, 2, 3, 4]
        }
    }

    renderProperties() {
        return this.state.properties.map((property) => {
            return <PropertyCard propertyHeading="Skyline Views" propertyName="Skyline Views" propertyPrice ="$240 per night" />
        })
    }

    render() {
        return (
        <div className='container row'>
            { this.renderProperties() }
        </div>
        )
    }

}