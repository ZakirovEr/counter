import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import {Count} from './components/Count/Count'
function App() {
  const [count, setCount] = useState(1)
  return (
    <div className="App">
      <Count counter='0'/>
      <Button  setCount= {stitle='+'/>
      <Button setCount = {setCount} title='-'/>
    </div>
  );
}

export default App;
