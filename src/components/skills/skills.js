import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';


class Skills extends Component {
  render() {
    return (
      <div>
        <h1>Skills Page</h1>
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
