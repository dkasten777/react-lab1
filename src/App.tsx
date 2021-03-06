import React from 'react';
import Header from './components/Header';
import './App.css';
import AdDesigner from './components/AdDesigner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header />
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
