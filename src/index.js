import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import './index.css';

import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/goit-react-hw-5-movies/'>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
