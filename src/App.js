import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar dark color="primaray">
          <div className="container">
            <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default App;
