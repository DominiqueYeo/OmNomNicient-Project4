import React from 'react';
import { render } from 'react-dom';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Root React element to render stuff into
const rootElement = document.createElement('div');

// Append root element to body of HTML
document.body.appendChild(rootElement);

// Render the JSX element into the root element
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement,
);
