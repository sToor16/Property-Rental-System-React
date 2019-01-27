import React from 'react';
import { Link} from "react-router-dom";

export function PropertyCard(props) {
    const properties = props.properties;

    return (
        <div className='col-md-3 col-xs-6'>
            <Link to={`/property/${properties.id}`}>
                <div className='card'>
                    <img src="http://via.placeholder.com/350x250"></img>
                    <div>
                        <h6>{properties.propertyHeading}</h6>
                        <h4>{properties.propertyName}</h4>
                        <p>{properties.propertyPrice}</p>
                        <p>{properties.bedroom}</p>
                        <a href="">More Info</a>
                    </div>
                </div>
            </Link>
        </div>
    )
}