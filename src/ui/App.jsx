import React, { Component } from 'react';
import Variants from './Variants';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-header__title">React test</h1>
        </header>
        <section className="app-content">
          <Variants proteinId="P05067" />
        </section>
      </div>
    );
  }
}
export default App;
