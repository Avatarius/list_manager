
import './styles/index.scss';


import { App } from './components/app/app';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';


const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
