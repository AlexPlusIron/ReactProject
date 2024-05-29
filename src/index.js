import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot из react-dom/client
import { Provider } from 'react-redux';
import store from './store'; // Подключение Redux store
import './index.css';
import App from './App';


const root = createRoot(document.getElementById('root')); // Используем createRoot для инициализации корневого компонента
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );