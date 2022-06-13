import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import { saveState } from "./localStorage"

store.subscribe(() => {
  const {auth} = store.getState()
  console.debug("auth state changed to")
  console.debug(auth)
  saveState(auth)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
