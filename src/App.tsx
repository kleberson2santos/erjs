import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([
    'John',
    'Marie',
    'Phill',
    'John',
    'Alex',
  ]);

  useEffect(() => {
    console.log('Mounting App');

    return () => {
      console.log('Unmonting App');
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            setNames([...names, 'jeremias']);
          }}
        >
          adicionar jeremias
        </button>
      </header>
    </div>
  );
}

export default App;
