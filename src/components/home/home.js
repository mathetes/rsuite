import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';
import Toggle from '../toggle/toggle';

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={24}>
            <h1>Home page</h1>
            <Toggle />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
