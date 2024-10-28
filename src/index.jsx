import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error rendering app:', error);
    // Render a fallback UI
    root.render(
      <div>
        <h1>Something went wrong.</h1>
        <p>Error: {error.message}</p>
      </div>
    );
  }
};

renderApp();