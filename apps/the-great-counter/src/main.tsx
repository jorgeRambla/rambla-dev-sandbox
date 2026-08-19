import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@rambla/shared/styles.css';
import './app.css';
import { App } from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
