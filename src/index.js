import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-dt4l200y0vfuwuja.us.auth0.com"
    clientId="KKmDKdyLtUbZ8Kf2laRvFWlUmTJCcaYR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
       <App />
    </Auth0Provider>
  </React.StrictMode>
);


reportWebVitals();
