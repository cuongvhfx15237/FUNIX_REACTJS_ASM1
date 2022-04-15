import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";
import { Button } from 'reactstrap';
import HandleColumn from "./handleColumn";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
    };
  }
  onStaffSelected(Staff) {
    this.setState({ selectedStaff: Staff });
  }

  renderStaff(Staff) {
    if (Staff != null) {
      return (
        <Card>
          <CardBody>
            <h1>{Staff.name}</h1>
            <CardText>
              Ngày sinh: {dateFormat(Staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(Staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {Staff.department.name} </CardText>
            <CardText>Hệ số lương: {Staff.salaryScale} </CardText>
            <CardText>Số ngày nghỉ còn lại: {Staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {Staff.overTime}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderImage(Staff) {
    if (Staff != null) {
      return (
        <Card>
          <CardBody>
            <CardImg src={Staff.image} alt={Staff.name} />
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

    
  render() {
    let ClassChange = "col-sm-12 col-md-6 col-xl-2"
    const staf = this.props.Staffs.map((Staff) => {
      return (
        <div key={Staff.id} className={ClassChange}>
          <Card onClick={() => this.onStaffSelected(Staff)}>
            <CardTitle>{Staff.name}</CardTitle>
          </Card>
        </div>
      );
    })

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Button id="2 Col" onClick={()=>{ClassChange = document.getElementById('2 Col').title}}
              title="col-sm-12 col-md-6 col-xl-6">
              2 cột
            </Button>
            <Button id="4 Col" onClick= {()=>{ClassChange = document.getElementById('4 Col').title}}
              title="col-sm-12 col-md-6 col-xl-3">
              4 cột
            </Button>
            <Button id="6 Col" onClick= {()=>{ClassChange = document.getElementById('6 Col').title}}
              title="col-sm-12 col-md-6 col-xl-2">
              6 cột
            </Button>
          </div>
        </div>
        <br></br>

        <div className="row">{staf}</div>
        <div className="row">
          Bấm vào tên Nhân Viên để xem thông tin cụ thể.
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {this.renderStaff(this.state.selectedStaff)}
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3">
            {this.renderImage(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
  // HandleColumn1(ClassChange = 'col-sm-12 col-md-6 col-xl3') {
  //   return ClassChange =  document.getElementById('2 Col').title}
  // HandleColumn2(ClassChange) {
  //   return ClassChange =  document.getElementById('4 Col').title;}
  // HandleColumn3(ClassChange) {
  //   return ClassChange =  document.getElementById('6 Col').title;}
}

export default StaffList;
