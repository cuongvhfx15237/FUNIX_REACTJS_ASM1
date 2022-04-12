import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle,} from 'reactstrap';

class StaffList extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedStaff:null};
        }
        onStaffSelected(Staff){
            this.setState({selectedStaff:Staff})
        }
        renderStaff(Staff, Role, department){
            if (Staff!= null){
                return (
                    <Card>
                        <CardBody>
                            <CardTitle>{Staff.name}</CardTitle>
                            <CardText>{Staff.doB}</CardText>
                            <CardText>{Staff.startDate}</CardText>
                            <CardText>{department.name}</CardText>
                            <CardText>{Role.NORMAL_STAFF}</CardText>
                            <CardText>{Staff.annualLeave}</CardText>
                            <CardText>{Staff.overTime}</CardText>

                        </CardBody>
                    </Card>
                )
            }
            else {
                return( <div></div>)
            }
        }
        renderImage(Staff){
            if (Staff!= null){
                return (
                    <Card>
                        <CardBody>
                            <CardImg src={Staff.img} alt={Staff.name}/>
                        </CardBody>
                    </Card>
                )
            }
            else {
                return( <div></div>)
            }
        }
        render(){
            const staf = this.props.Staffs.map((Staffs)=> {
                return(
                    <div key = {Staffs.id} className='col-12 col-md-6 col-xl-3'>
                        <Card onClick={()=>this.onStaffSelected(Staffs)}>
                            <CardTitle>AAAA</CardTitle>
                        </Card>
                    </div>
                )
            })
            return(
                <div className='container'>
                    <div className='row'>{staf}</div>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-xl-3'>
                            {this.renderStaff(this.state.selectedStaff)}
                        </div>
                    </div>
                </div>
            )
        }
        }
        
    
export default StaffList;