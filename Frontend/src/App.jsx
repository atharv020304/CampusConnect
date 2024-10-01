import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    
    document.body.style.backgroundColor = 'green'; 
  };

  const handleDecrement = () => {
    setCount(count - 1);
    document.body.style.backgroundColor = 'yellow'; 
  };

  return (
    <>
      <div className="card">
        <div>
          {count}
        </div>

        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </>
  );
}

export default App;
