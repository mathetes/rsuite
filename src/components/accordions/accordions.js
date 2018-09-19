import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import "./accordions.css";


class Accordions extends Component {
  render() {
    return (
      <div>
        <Accordion>
            <AccordionItem expanded>
                <AccordionItemTitle>
                    <h3>Навыки</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <ul>
                      <li>Опыт работы во frontend-разработке более 2 лет;</li>
                      <li>Опыт работы со стеком React/Redux;</li>
                      <li>Знание нативного Javascript;</li>
                      <li>Уверенные навыки в вёрстке в тесной связке со своим же фронт-кодом (кросс-браузерность, адаптивная вёрстка, html5, css3, sass/less/stylus, методология BEM);</li>
                      <li>Понимание специфики работы с SPA;</li>
                      <li>Опыт использования инструментов сборки проектов (Gulp, Webpack);</li>
                      <li>Знание основ PHP;</li>
                      <li>Хорошее знание английского на уровне  upper-Intermediate: могу читать техническую литературу и саппорт тикеты. Разговорный английский.</li>
                   </ul>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Ожидания</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                <ul>
                    <li>Мне интересно участвовать в проектах по разработке принципиально новых и инновационных продуктов;</li>
                    <li>Разработка клиентских SPA. (responsive single-page applications).</li>
                    <li>Мне нравится творческая атмосфера, работа в команде единомышленников, и есть очень сильное желание развиваться и создавать востребованный продукт;</li>
                    <li>Создание компонентов пользовательского интерфейса для повторного использования в различных контекстах</li>
                    <li>Разработка новой UI функциональности.</li>
                    <li>Официальное трудоустройство;</li>
                    <li>Возможность принимать ответственные самостоятельные решения;</li>
                    <li>Профессиональный рост.</li>
                </ul>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Личные и профессиональные качества</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <ul className='rsm-list'>
                      <li>Высокая обучаемость и стремление к профессиональному росту;</li>
                      <li>Развитое чувство ответственности за результат своей работы;</li>
                      <li>Аккуратность в работе;</li>
                      <li>Способность эффективно работать в команде, доносить суть своих решений и предложений другим коллегам.</li>
                  </ul>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Tехнологии и инструменты, которые мне нравятся:</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <ul>
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
                              <li>D3.js</li>
                          </ul>
                  </ul>
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default Accordions;
