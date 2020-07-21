import React from 'react';
import './App.css';
import Navigationbar from './components/Common/Navigationbar/Navigationbar';
import AddContact from './components/AddContact/AddContact';


function App() {
  return (
    <div className="App">
      <Navigationbar />
      <AddContact />
    </div>
  );
}

export default App;
