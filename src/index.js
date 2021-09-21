import React from 'react';
import ReactDOM from 'react-dom';
import "modern-normalize/modern-normalize.css";
import './index.css';
import App from './components/App';
// import DevTools from "mobx-react-devtools";

ReactDOM.render(
  <React.StrictMode>
    {/* <DevTools /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

