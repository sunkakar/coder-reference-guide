import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/layout/Navbar';
import Content from './components/layout/Content';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Content/>
    </div>
  );
}

export default App;
