import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function Panel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Навыки:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul className='rsm-list'>
            <li>Опыт работы во frontend-разработке более 2 лет;</li>
            <li>Опыт работы со стеком React/Redux;</li>
            <li>Знание нативного Javascript;</li>
            <li>Уверенные навыки в вёрстке в тесной связке со своим же фронт-кодом (кросс-браузерность, адаптивная вёрстка, html5, css3, sass/less/stylus, методология BEM);</li>
            <li>Понимание специфики работы с SPA;</li>
            <li>Опыт использования инструментов сборки проектов (Gulp, Webpack);</li>
            <li>Знание основ PHP;</li>
            <li>Хорошее знание английского на уровне  upper-Intermediate: могу читать техническую литературу и саппорт тикеты. Разговорный английский.</li>
         </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Ожидания:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul className='rsm-list'>
              <li>Мне интересно участвовать в проектах по разработке принципиально новых и инновационных продуктов;</li>
              <li>Разработка клиентских SPA. (responsive single-page applications).</li>
              <li>Мне нравится творческая атмосфера, работа в команде единомышленников, и есть очень сильное желание развиваться и создавать востребованный продукт;</li>
              <li>Создание компонентов пользовательского интерфейса для повторного использования в различных контекстах</li>
              <li>Разработка новой UI функциональности.</li>
              <li>Официальное трудоустройство;</li>
              <li>Возможность принимать ответственные самостоятельные решения;</li>
              <li>Профессиональный рост.</li>
          </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Личные и профессиональные качества</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul className='rsm-list'>
              <li>Высокая обучаемость и стремление к профессиональному росту;</li>
              <li>Развитое чувство ответственности за результат своей работы;</li>
              <li>Аккуратность в работе;</li>
              <li>Способность эффективно работать в команде, доносить суть своих решений и предложений другим коллегам.</li>
          </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Tехнологии и инструменты, которые мне нравятся:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul className='rsm-list'>
              <li>Jade - html препроцессор, который позволяет создавать переиспользуемый код</li>
              <li>IDE PHPStorm</li>
              <li>Работа через терминал Linux (GIT, SSH, SFTP)</li>
              <li>Emmet</li>
              <li>Stylus - CSS препроцессор</li>
              <li>Git - система конроля версий</li>
              <h3>JS и СSS библиотеки</h3>
                  <ul>
                      <li>React.js</li>
                      <li>2.js</li>
                      <li>Animation.css</li>
                      <li>3.js</li>
                  </ul>
          </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Личные предпочтения</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul className='rsm-list'>
              <li>Возможность удаленной работы.</li>
              <li>Готов выполнить тестовое задание</li>
          </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);
