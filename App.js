import React from 'react';
import DataBase from './DataBase.js';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
       <header> <h1> Employee DataBase </h1></header>
          <DataBase/>
      </div>
    );
  }
} 

export default App;