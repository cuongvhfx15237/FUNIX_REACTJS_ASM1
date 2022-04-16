import React, { Component } from 'react';
import { Navbar , NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { STAFFS } from './shared/staffs.jsx';
import StaffList from './components/StaffListComponent'





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Staffs:STAFFS,
      
    }
  }
  render(){
    return(
      <div>
        <Navbar dark color="primary">
          <div className = "container-xxl">
            <NavbarBrand href = "/"> ỨNG DỤNG QUẢN LÝ NHÂN SỰ V1.0</NavbarBrand>
          </div>
        </Navbar>

        <StaffList Staffs = {this.state.Staffs}/>
      </div>
    )
  } 
  componentDidMount(){
    return(
      <div>
      <Navbar dark color="primary">
        <div className = "container-xxl">
          <NavbarBrand href = "/"> ỨNG DỤNG QUẢN LÝ NHÂN SỰ V2.0</NavbarBrand>
        </div>
      </Navbar>
      <StaffList Staffs = {this.state.Staffs}/>
    </div>
    )
  }
}


export default App;
