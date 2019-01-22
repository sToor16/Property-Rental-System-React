import React, { Component } from 'react';
import {NavBar} from './shared/navBar';
import './App.css';
import {PropertyList} from "./components/property/propertyList";
import {PropertyDetail} from "./components/property/propertyDetail";

class App extends Component {

  constructor(){
      super();

      this.state = {
          isPropertyList: true
      }

  }

  navigate(){
      this.setState({
          isPropertyList: !this.state.isPropertyList
      })
  }
  render() {
    return (
      <div className="App">
          <NavBar />
          <button onClick={()=> {this.navigate()}}>Change View</button>
          { this.state.isPropertyList ? <PropertyList/> : <PropertyDetail/> }
      </div>
    );
  }
}

export default App;
