import React, { Component } from 'react';
import { Navbar , NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { STAFFS, ROLE, DEPARTMENTS } from './shared/staffs.jsx';
import StaffList from './components/StaffListComponent'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Staffs:STAFFS,
      Roles:ROLE,
      Depts:DEPARTMENTS
    }
  }
  render(){
    return(
      <div>
        <Navbar dark color="primary">
          <div className = "container">
            <NavbarBrand href = "/"> ỨNG DỤNG QUẢN LÝ NHÂN SỰ V1.0 </NavbarBrand>
          </div>
        </Navbar>
        <StaffList Staffs = {this.state.Staffs}/>
        <StaffList Roles = {this.state.Roles}/>
        <StaffList Depts = {this.state.Depts}/>
      </div>
    )
  }
}

export default App;
