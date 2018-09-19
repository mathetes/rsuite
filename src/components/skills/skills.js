import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { List,RTList, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';


class Skills extends Component {
  render() {
    return (
      <div>
        <h1>Технологии и навыки</h1>
        <List RTList selectable ripple>
          <ListItem
            avatar='https://www.shareicon.net/data/128x128/2016/07/10/119874_apps_512x512.png'
            caption='React — Redux'
            legend="(понимание жизненного цикла);"
          />
          <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
            caption='знание нативного JS'
            legend='ES5, ES6'
          />
          <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
            caption='Webpack и Gulp'
            legend=''
          />
      </List>
        <ul className='skill-list'>
          <li>React — Redux (понимание жизненного цикла);</li>
          <li>знание нативного JS;</li>
          <li>Webpack и Gulp;</li>
          <li>styled-components</li>
          <li>ES6, webpack, npm, yarn;</li>
          <li>Опыт работы с Git;</li>
          <li>Babel (ES 2015/2016);</li>
          <li>Средний уровень владения английским (уметь читать техническую документацию</li>
          <li>nodejs</li>
          <li>css3, адаптивная верстка, препроцессоры</li>
          <li>Навык серверного программирования (PHP);</li>
          <li>препроцессоры: sass, less, stylus;</li>
        </ul>

      </div>
    );
  }
}

export default Skills;
