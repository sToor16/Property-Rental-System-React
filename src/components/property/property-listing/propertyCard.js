import React from 'react';
import { Link} from "react-router-dom";

export function PropertyCard(props) {
    const property = props.property;

    return (
        <div className='col-md-3 col-xs-6'>
            <Link to={`/property/${property._id}`}>
                <div className='card'>
                    <img src="http://via.placeholder.com/350x250"></img>
                    <div>
                        <h6>{property.city}</h6>
                        <h4>{property.title}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}