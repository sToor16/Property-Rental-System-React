import React, { Component } from 'react';
import {PropertyCard} from "./propertyCard";

export class PropertyList extends Component {

    constructor() {
        super();

        this.state = {
            properties: [{
                id: "2",
                propertyHeading: "Central Apartment",
                propertyDetails: "Skyline Views",
                propertyPrice: "340",
                bedroom: "3"
            }]
        }
    }

    renderProperties() {
        return this.state.properties.map((properties, index) => {
            return (
                <PropertyCard properties = {properties} key = {index} />
            )
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