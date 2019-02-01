import React, { Component } from 'react';
import {MapWithGeoMarker} from "../../map/map";
import { GOOGLE_API_KEY } from "../../../config/config"

export class PropertyMap extends Component {

    render(){
        const location = this.props.location;
        return(
            <MapWithGeoMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
            />
        )
    }

}