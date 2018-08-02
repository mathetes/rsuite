import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


function Workplace(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Ведущий системный администратор АО НЗИВ
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          2016- по настроящее время
          </Typography>
          <Typography component="p">
            Поддержка серверов предприятия, сопровождение сайта www.nziv.ru
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Web-Программист в e2e4gu.ru
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          июль-октябрь 2016
          </Typography>
          <Typography component="p">
            Разработка сайтов на full-stack. На базе Wordpress и 1С-Битрикс
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Системный администратор в ООО Торг 54
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          июль-октябрь 2016
          </Typography>
          <Typography component="p">
            Разработка сайтов на full-stack. На базе Wordpress и 1С-Битрикс
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Web-Программист в e2e4gu.ru
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          июль-октябрь 2016
          </Typography>
          <Typography component="p">
            Разработка сайтов на full-stack. На базе Wordpress и 1С-Битрикс
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Мастер по ремонту ПК
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          2009-2015
          </Typography>
          <Typography component="p">
            Частный ремонт ПК
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Workplace.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workplace);
