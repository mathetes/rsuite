import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;
