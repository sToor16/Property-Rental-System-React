import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'


class PropertyDetail extends Component {

    componentWillMount() {
        const propertyId = this.props.match.params.id;
        this.props.dispatch(actions.fetchPropertyById(propertyId));
    }

    render() {
        const property = this.props.property;
        if (property.id) {
            return (
                <div>{property.propertyHeading}</div>
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