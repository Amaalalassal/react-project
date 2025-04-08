import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss";
import App from './App.jsx'
import { CompareProvider } from './components/common/CompareContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompareProvider>
    <App />
    </CompareProvider>

  </StrictMode>,
)
