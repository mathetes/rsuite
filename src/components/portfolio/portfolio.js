import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';
import CenteredTabs from '../tabs/tabs';

class Portfolio extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={24}>
            <h1>Portfolio Page</h1>
            <CenteredTabs></CenteredTabs>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Portfolio;
