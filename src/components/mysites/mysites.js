import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
    display: 'inline-flex',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Mysites(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Сибпром<br />энерго
          </Typography>
          <Typography component="p">
            Компания по продаже энергооборудования
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Смотреть
          </Button>
        </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Гостиница "Кристалл"
            </Typography>
            <Typography component="p">
              Гостиничный комплекс "Кристалл"
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Смотреть
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Языковая школа Юнити
            </Typography>
            <Typography component="p">
              Школа дополнительного образования. Обучение английскому языку.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Смотреть
            </Button>
          </CardActions>
        </Card>
    </div>
  );
}

Mysites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mysites);
