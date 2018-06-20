import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';
import Accordions from '../accordions/accordions';

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={24}>
            <h1>РОМАН АЯПЕРГЕНОВ</h1>
            <img src="http://frontend.webexcel.ru/images/ayapergenov-ava3.jpg" alt="" />
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Accordions />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
