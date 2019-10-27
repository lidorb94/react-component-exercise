import React from 'react';
import logo from './logo.svg';
import Card from './Card';
import Sidebar from './Sidebar'
import List from './List'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="App">
          
          <Card title="Watch" description="18.99$"/>
          <Card title="Necklace" description="20.99$"/>
          <Card title="Braclet" description="23.99$"/>
          <Sidebar />
          <List />
          
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }

}

export default App;