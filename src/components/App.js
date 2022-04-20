import '../style/App.css';
import Input from './Input';
import { createContext, useContext, useState } from 'react';
import Map from './Map';

function App() {
  const locationContext = createContext(null);
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
