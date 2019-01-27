import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

import {NavBar} from './shared/navBar';
import {PropertyList} from "./components/property/propertyList";
import {PropertyDetail} from "./components/property/propertyDetail";

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <Route exact path="/" render={() => { return <Redirect to={'/properties'}/> }}/>
                    <Route exact path="/properties" component = {PropertyList}/>
                    <Route exact path="/property/:id" component = {PropertyDetail}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
