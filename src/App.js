import React, { Component } from 'react';
import {NavBar} from './shared/navBar';
import './App.css';
import {PropertyCard} from "./components/propertyCard";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <div className='row'>
              <PropertyCard/>
              <PropertyCard/>
              <PropertyCard/>
              <PropertyCard/>
          </div>
      </div>
    );
  }
}

export default App;
