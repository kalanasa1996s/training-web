import React from 'react';
// import background from '../public/background.jpg';
// import '../public/background.jpg'
import background from '../src/Zoom.png';

import './App.css';
import DiaryCard from './DiaryCard/DiaryCard';

function App() {
  return (
    
    <div className="App" style={{ backgroundImage:`url(${background})` }}>
      
      
      <header className="App-header">
      <DiaryCard/>
      </header>

    

    </div>
  );
}

export default App;
