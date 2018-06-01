import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';
import Header from "../header/header";

class Grider extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={24}>
            <Header />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Grider;
