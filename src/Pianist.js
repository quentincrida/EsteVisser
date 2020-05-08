import React, {Component, Fragment} from 'react';

class Pianist extends Component {
  constructor(props){
  super(props);
  this.state = {
    enquiries: 0
  }
  this.makeEnquiry = this.makeEnquiry.bind(this);
  this.cancelEnquiry = this.cancelEnquiry.bind(this);

}
makeEnquiry(){
  this.setState(prevState => {
    return {enquiries: prevState.enquiries + this.props.enquiryAmount};
  })
}
cancelEnquiry(){
      this.setState(prevState => {
        let enquiriesTotal = prevState.enquiries - this.props.enquiryAmount; ;
        if(enquiriesTotal < 0){
           enquiriesTotal = 0;
        }
        return {enquiries: enquiriesTotal};
    });
  }

  render(){
    return (
      // <h2 className="title"> Pianist Extraordinaire</h2>
      <Fragment>
      <div className="pianist-detail">
        <h2>{this.props.title}</h2>
        <p>Enquiries: {this.state.enquiries}</p>
        <button onClick={this.makeEnquiry}>Make Enquiry</button>
        <button onClick={this.cancelEnquiry}> Cancel Enquiry</button>
      </div>
    </Fragment>

    )
  }

}

 export default Pianist;
