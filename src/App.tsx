import { useState } from 'react';
import './App.css';
// Import the Test component
import LatestHomePage from './pages/LatestHomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Include the Test component here */}
      <LatestHomePage/>
 
    </>
  );
}

export default App;