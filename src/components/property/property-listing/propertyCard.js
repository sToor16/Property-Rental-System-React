import React from 'react';
import { Link} from "react-router-dom";
import {propertyType, toUpperCase} from "../../../helpers";

export function PropertyCard(props) {
    const property = props.property;

    return (
        <div className='col-md-3 col-xs-6'>
            <Link to={`/property/${property._id}`}>
                <div className='card'>
                    <img src="http://via.placeholder.com/350x250"></img>
                    <div>
                        <h6>{toUpperCase(property.city)}</h6>
                        <h4>{toUpperCase(propertyType(property.shared))} {toUpperCase(property.category)}</h4>
                        <h4>{property.title}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}