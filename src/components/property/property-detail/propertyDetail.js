import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import {PropertyAssets} from "./propertyAssets";
import {PropertyInfo} from "./propertyInfo";
import {PropertyMap} from "./propertyMap";


class PropertyDetail extends Component {

    componentWillMount() {
        const propertyId = this.props.match.params.id;
        this.props.dispatch(actions.fetchPropertyById(propertyId));
    }

    render() {
        const property = this.props.property;
        console.log(property);
        if (property._id) {
            return (
                <div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={property.image}></img><br/>
                        </div>
                        <div className='col-md-6'>
                            <PropertyMap location={`${property.city}, ${property.street}`}/>
                        </div>
                    </div>

                    <PropertyInfo property={property}/>
                    <PropertyAssets/>
                </div>
            )
        }
        else {
            return (
                <div>Property Loading...</div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        property: state.property.data
    }
}

export default connect(mapStateToProps)(PropertyDetail)