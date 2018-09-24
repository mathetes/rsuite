import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import "./about.css";


class About extends Component {
  render() {
    return (
      <div>
        <h1>Технологии при создании этого сайта</h1>
        <ul>
          <li>Crete-react-app - начальная сбора для быстрого старта приложений</li>
          <li>rsuite - UI библиотека</li>
          <li>react-accessible-accordion - плагин для создания аккордионов</li>
          <li>React Toolbox</li>
          <li>Добавить фиолетовый цвет на страницах</li>
          <li>Логотип - придумать название</li>
          <li>Подключить красивый шрифт</li>
          <li>Добавить анимации</li>
          <li>Добавить оформление</li>


        </ul>
      </div>
    );
  }
}

export default About;
