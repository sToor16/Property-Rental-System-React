import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker, InfoWindow
} from "react-google-maps";
import {GoogleMapCaching} from "../../services/GoogleMapCaching";

function MapComponent(props) {
    const coordinates = props.coordinates;
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={coordinates}
            center={coordinates}
        >
            <Marker position={ coordinates }/>
            <InfoWindow position={ coordinates }>
                <div>
                    Oops, There was a problem finding the location!!
                </div>
            </InfoWindow>
        </GoogleMap>
    )
}

function withGeoCode(WrappedComponent) {
    return class extends React.Component {

        constructor() {
            super();
            this.googleMapCaching = new GoogleMapCaching();
            this.state = {
                coordinates: {
                    lat: 0,
                    lng: 0
                }
            }
        }

        componentWillMount() {
            this.getGeoCodedLocation();
        }
        getGeoCodeLocation(location){
            const geocoder = new window.google.maps.Geocoder();
            return new Promise((resolve, reject) => {
                geocoder.geocode({address: location}, (result, status) => {

                    if (status ==='OK') {
                        const geometry = result[0].geometry.location;
                        const coordinates = { lat: geometry.lat(), lng: geometry.lng()};
                        this.googleMapCaching.locationCacheValue(location, coordinates);
                        resolve(coordinates);
                    } else {
                        reject('Could not load the provided Location.')
                    }
                });
            });
        }
        getGeoCodedLocation() {
            // const location = this.props.location;
            const location = 'test';
            if(this.googleMapCaching.isValueCached(location)){
                this.setState({coordinates: this.googleMapCaching.getLocationCacheValue(location)})
            } else {
                this.getGeoCodeLocation(location).then(
                    (coordinates) => {
                        this.setState({coordinates});
                    },
                    (error) => {
                        console.log("ERROR!!");
                    }
                );
            }
        }
        render() {
            return (
                <WrappedComponent {...this.state} />
            )
        }
    }
}

export const MapWithGeoMarker = withScriptjs(withGoogleMap(withGeoCode(MapComponent)));

