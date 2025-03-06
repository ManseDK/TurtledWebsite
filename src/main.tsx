
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add some debug logging to help identify issues
console.log('Application starting...');
console.log('Current URL:', window.location.href);
console.log('Current pathname:', window.location.pathname);

try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error('Root element not found!');
  } else {
    console.log('Root element found, rendering app...');
    createRoot(rootElement).render(<App />);
    console.log('App rendered successfully');
  }
} catch (error) {
  console.error('Error rendering the application:', error);
}
