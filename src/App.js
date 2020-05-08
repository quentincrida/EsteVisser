import React, {Component, Fragment}from 'react';
import EsteVisser from './EsteVisser';
import Quote from './Quote';
import Pianist from './Pianist';
import './App.css';

function App() {

    return (
      <Fragment>
          <EsteVisser
            title="Este's Savings Pig"
            depositAmount={5}/>

          <Quote
            title="Your QuoteList"
            addQuoteAmount={100}/>

            <Pianist
              title="Accompanist, Repetiteur, Teacher"
              enquiryAmount={1}/>
      </Fragment>
        );
  }


export default App;
