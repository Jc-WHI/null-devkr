import { useState } from 'react';
import './App.css';
// Import the Test component
import Test from './pages/Test';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Include the Test component here */}
      <Test />
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Increment
        </button>
      </div>
    </>
  );
}

export default App;