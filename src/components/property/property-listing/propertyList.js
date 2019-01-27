import React, { Component } from 'react';
import {PropertyCard} from "./propertyCard";
import {connect} from 'react-redux';
import * as actions from '../../actions'

class PropertyList extends Component {

    renderProperties() {
        return this.props.properties.map((properties, index) => {
            return (
                <PropertyCard properties = {properties} key = {index} />
            )
        })
    }

    componentWillMount() {
            this.props.dispatch(actions.fetchProperties());
        }

    render() {
        return (
        <div className='container row'>
            { this.renderProperties() }
        </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        properties: state.properties.data
    }
}

export default connect(mapStateToProps)(PropertyList)