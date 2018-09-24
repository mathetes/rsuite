import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Grid, Row, Col } from 'rsuite';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Avatar } from 'antd';

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
          <h2>В соц. сетях</h2>
          <ul>
            <Avatar src="https://www.rarst.net/slides/caching-ru/pictures/github-64-black.png" />
            <li>Github</li>
            <Avatar src="http://duplatakes.es/fotos/facebook.png" />
            <li>Facebook</li>
            <Avatar src="https://findicons.com/files/icons/1573/iphone_style/64/linkedin.png" />
            <li>Linkedin</li>
            <Avatar src="https://shuma647.ru/wp-content/uploads/soc/vk.png" />
            <li>vk</li>
            <li></li>
          </ul>
        </Row>
        <Row className="show-grid">


          <Col xs={24} sm={12} md={8}>
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
          <Col xs={24} sm={12} md={8}>
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
        <Col xs={24} sm={12} md={8}>
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
                  Женат, 3 детей <br/>
                  Люблю футбол и настольный теннис
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
