import React from 'react';
import { toUpperCase, propertyType } from '../../../helpers'

export function PropertyInfo(props) {
    const property = props.property;
    return (
        <table className="table" style={{width: '50%'}}>
            <tr>
                <td>Title</td>
                <td>{property.title}</td>
            </tr>
            <tr>
                <td>City</td>
                <td>{toUpperCase(property.city)}</td>
            </tr>
            <tr>
                <td>Street</td>
                <td>{property.street}</td>
            </tr>
            <tr>
                <td>Property Type</td>
                <td>{propertyType(property.shared)} {property.category}</td>
            </tr>
            <tr>
                <td>Bedrooms</td>
                <td>{property.bedrooms}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>{property.description}</td>
            </tr>
            <tr>
                <td>Daily Rate</td>
                <td>{property.dailyRate}</td>
            </tr>
            <tr>
                <td>Created At</td>
                <td>{property.createdAt}</td>
            </tr>

        </table>
    )

}