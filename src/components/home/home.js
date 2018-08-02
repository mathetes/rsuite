import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';
import Accordions from '../accordions/accordions';
import './home.css';

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={24}>
            <img className="myavatar" src="http://frontend.webexcel.ru/images/ayapergenov-ava3.jpg" alt="" />
            <div className='myperson'>
              <h1 className="myname">РОМАН АЯПЕРГЕНОВ</h1>
              <h2 className="myprof">Frontend/React Developer</h2>
              <Accordions />
            </div>
          </Col>
          <Col xs={18} sm={18} md={18}>

          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
