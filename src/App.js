import React, { Component } from 'react';
import { Navbar , NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { STAFFS } from './shared/staffs.jsx';
import StaffList from './components/StaffListComponent'
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Staffs:STAFFS,
      Colvalue:null
    }
  }
  render(){
    return(
      <div>
        <Navbar dark color="primary">
          <div className = "container-xxl">
            <NavbarBrand href = "/"> ỨNG DỤNG QUẢN LÝ NHÂN SỰ V1.0</NavbarBrand>
              <Button onCLick={(Colvalue)=>"col-12 col-md-6 col-xl-2"}>Xem 6 cột</Button>
              <Button onCLick={(Colvalue)=>"col-12 col-md-6 col-xl-3"}>Xem 4 cột</Button>
              <Button onCLick={(Colvalue)=>"col-12 col-md-6 col-xl-6"}>Xem 2 cột</Button>
          </div>
        </Navbar>
        <StaffList Staffs = {this.state.Staffs}/>
      </div>
    )
  }
}

export default App;
