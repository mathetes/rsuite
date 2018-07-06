import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: "33%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class Contacts extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={12} md={6}>
          <div>
            <Card>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"s
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Мой адрес
                </Typography>
                <Typography component="p">
                  г.Искитим, ул.Семипалатинская дом 1, Новосибирской области, Россия
                </Typography>
              </CardContent>
            </Card>
          </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
          <div>
            <Card>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Мобильный телефон
                </Typography>
                <Typography component="p">
                +7-923-157-70-52 <br />
                +7-953-888-50-98
                </Typography>
              </CardContent>
            </Card>
          </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
          <div>
            <Card>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Обо мне
                </Typography>
                <Typography component="p">
                  Женат, 3 детей
                </Typography>
              </CardContent>
            </Card>
          </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Contacts;
