import React, { Component } from 'react';

import Header from ".header"
import Forter from "./footer"

export default class App extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Header month="January" />
      </div>
    );
  }
}