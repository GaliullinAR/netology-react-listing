import React from 'react';

import './App.css';
import Listing from './components/Listing';
import data from './data';


function App() {
  return (
    <div className="App">
      <Listing item={data}/>
    </div>
  );
}

export default App;
