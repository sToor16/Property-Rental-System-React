import React, { Component } from 'react';
import {MapWithGeoMarker} from "../../map/map";

export class PropertyMap extends Component {

    render(){
        const location = this.props.location;
        return(
            <MapWithGeoMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCurqTpMKeMSOLS5vy5ktnrHPAQM66UiXM&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }

}