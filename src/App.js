import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';

import {Provider} from 'react-redux';

import {NavBar} from './shared/navBar';
import PropertyListing from "./components/property/property-listing/propertyListing";
import PropertyDetail from "./components/property/property-detail/propertyDetail";

import './App.css';
import { init} from "./reducers";

const store = init();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <NavBar/>
                        <Route exact path="/" render={() => {
                            return <Redirect to={'/properties'}/>
                        }}/>
                        <Route exact path="/properties" component={PropertyListing}/>
                        <Route exact path="/property/:id" component={PropertyDetail}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
