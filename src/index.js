import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./router"
import { Provider } from "./components/ui/provider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);

