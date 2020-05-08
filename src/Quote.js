import React, {Component, Fragment} from 'react';

class Quote extends Component{
  constructor(props){
    super(props);

    this.state = {
      quoteTotal: 0
    };
    this.addQuote = this.addQuote.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
  }
  addQuote(){
      this.setState(prevState => {
        return {quoteTotal: prevState.quoteTotal + this.props.addQuoteAmount};
      });
  }
  deleteQuote(){
        this.setState(prevState => {
          let newQuoteAmount = prevState.quoteTotal - this.props.addQuoteAmount;
          if(newQuoteAmount < 0){
             newQuoteAmount = 0;
           };
           return {quoteTotal: newQuoteAmount};
         });
       }
  render(){
    return (
    <Fragment>
        <h2>{this.props.title}</h2>
        <p>QuotesTotal: £{this.state.quoteTotal}</p>
        <button onClick={ this.addQuote}>AddQuote</button>
        <button onClick={ this.deleteQuote}> DeleteQuote</button>
        </Fragment>
    );
  }
}

export default Quote;
