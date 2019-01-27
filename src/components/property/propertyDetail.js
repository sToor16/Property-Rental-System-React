import React, { Component } from 'react';

export class PropertyDetail extends Component {


    render() {
        return (
            <div>I am PropertyDetail for {this.props.match.params.id}</div>
        )
    }

}