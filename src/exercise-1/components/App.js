import React, {Component} from 'react';
import '../styles/App.css';
import Header from "./header/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
