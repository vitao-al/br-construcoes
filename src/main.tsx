import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
