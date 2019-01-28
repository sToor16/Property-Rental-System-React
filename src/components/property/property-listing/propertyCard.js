import React from 'react';
import { Link} from "react-router-dom";

export function PropertyCard(props) {
    const property = props.property;

    return (
        <div className='col-md-3 col-xs-6'>
            <Link to={`/property/${property.id}`}>
                <div className='card'>
                    <img src="http://via.placeholder.com/350x250"></img>
                    <div>
                        <h6>{property.propertyHeading}</h6>
                        <h4>{property.propertyName}</h4>
                        <p>{property.propertyPrice}</p>
                        <p>{property.bedroom}</p>
                        <a href="">More Info</a>
                    </div>
                </div>
            </Link>
        </div>
    )
}