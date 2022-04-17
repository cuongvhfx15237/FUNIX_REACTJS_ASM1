import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";
import { Button } from 'reactstrap';
import '../index.css'

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
      ClassChange: 'col-sm-12 col-md-6 col-xl-3'
    };
  }
  onStaffSelected(Staff) {
    this.setState({ selectedStaff: Staff });
  }
  onselectedButton(BUTTON) {
    this.setState({ selectedButton: BUTTON });
    // console.log(Button)
  }
  renderStaff(Staff,) {
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
  onClickTrigger(butn) {
    console.log(butn.ClassChange)
    this.setState({ ClassChange: butn.ClassChange });
  }
  render() {
    //data of button
    const Abutton = [
      {
        id: "1",
        name: '2 Cột',
        ClassChange: 'col-sm-12 col-md-6 col-xl-6'
      },
      {
        id: "2",
        name: '4 Cột',
        ClassChange: 'col-sm-12 col-md-6 col-xl-3'
      },
      {
        id: "3",
        name: '6 Cột',
        ClassChange: 'col-sm-12 col-md-6 col-xl-2'
      }
    ]
    const BUTTON = Abutton.map(Butn => {
      return (
        <Button
          key={Butn.id}
          className={"col-sm-4 col-md-4 col-xl-4"}
          title={Butn.ClassChange}
          onClick={() => this.onClickTrigger(Butn)}>
          {Butn.name}
        </Button>
      )
    })
        const staf = this.props.Staffs.map((Staff) => {
        return (
          <div key={Staff.id} className={this.state.ClassChange}>
            <Card onClick={() => this.onStaffSelected(Staff)}>
              <CardTitle>{Staff.name}</CardTitle>
            </Card>
          </div>
        )
      })
      return (
        <div className="container-fluid">
          <div className="row">{BUTTON}</div>
          <br></br>
          <div className="row">
            {staf}
          </div>
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
      )

    }}

    export default StaffList;
