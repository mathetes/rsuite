import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';

class Footer extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={24}>
            <h1>Footer Block</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Footer;
