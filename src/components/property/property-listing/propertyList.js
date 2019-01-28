import React, {Component} from 'react';
import {PropertyCard} from "./propertyCard";
import * as actions from '../../actions'

export class PropertyList extends Component {

    renderProperties() {
        return this.props.properties.map((property, index) => {
            return (
                <PropertyCard property={property} key={index}/>
            )
        });
    }

    render() {
        return (
            <div className='container row'>
                {this.renderProperties()}
            </div>
        )
    }
}