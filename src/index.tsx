import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function MyComponent() {
  const [canViewApp, setCanViewApp] = useState(true);

  return (
    <>
      {canViewApp && <App />}
      <button
        onClick={() => {
          setCanViewApp(!canViewApp);
        }}
      >
        toggle
      </button>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
