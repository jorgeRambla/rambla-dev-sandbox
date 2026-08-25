import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';
import { App } from './App';
import { lang, t } from './i18n';

document.documentElement.lang = lang;
document.title = t.appTitle;
document.querySelector('meta[name="description"]')?.setAttribute('content', t.appDescription);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
