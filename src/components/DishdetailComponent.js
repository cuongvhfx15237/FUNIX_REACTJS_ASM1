import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
// import { Pass } from './MenuComponent'

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataPass:null,
    };
  }
  renderDish(Pass=this.props.dataPass) {
    if (Pass != null) {
      return (
        <Card key={Pass.id}>
          <CardImg top src={Pass.image} alt={Pass.name} />
          <CardBody>
            <CardTitle>{Pass.name}</CardTitle>
            <CardText>{Pass.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComment(Pass=this.props.dataPass) {
    if (Pass != null) {
      return (
        <Card >
          <CardBody >
            <h2>Comments</h2>
            {Pass.comments.map(function (comments) {
              return (
                <div key={comments.id}>
                  <CardText>{comments.comment}</CardText>
                  <CardText>
                    {comments.author}, {comments.date}
                  </CardText>
                  <br></br>
                </div>
              );
            })}
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.Pass)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComment(this.state.Pass)}
          </div>
        </div>
    );
  }
}
export default DishDetail;
