import React from 'react';

export function PropertyCard(props) {
    return (
        <div className='col-md-3 col-xs-6'>
            <div className='card'>
                <img src="http://via.placeholder.com/350x250"></img>
                <div>
                    <h6>{props.propertyHeading}</h6>
                    <h4>{props.propertyName}</h4>
                    <p>{props.propertyPrice}</p>
                    <a href="">More Info</a>
                </div>
            </div>
        </div>
    )
}