import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';

class Contacts extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={24}>
            <h1>Contacts</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Contacts;
