import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import Header from "./components/header/header";
import Main from "./components/main/main";
import 'typeface-roboto';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
