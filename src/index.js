import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AvatarProvider } from './contexts/avatarContext.contexts';
import { UserProvider } from './contexts/users.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AvatarProvider>
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>
  </AvatarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
