import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import {PropertyList} from "./propertyList";

class PropertyListing extends Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchProperties());
    }

    render() {
        return (
            <div className='container row'>
                <PropertyList properties = {this.props.properties}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        properties: state.properties.data
    }
}

export default connect(mapStateToProps)(PropertyListing)