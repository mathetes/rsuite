import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import Workplace from '../workplace/workplace';


class Resume extends Component {
  render() {
    return (
      <div>
        <h1>Опыт работы</h1>
        <Workplace></Workplace>
      </div>
    );
  }
}

export default Resume;
