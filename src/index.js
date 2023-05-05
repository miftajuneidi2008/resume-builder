import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import personalSlice from './component/data/personalData';
import aboutSlice from './component/data/About';
import workSlice from './component/data/Work';
import educationSlice from './component/data/Education';
import languageSlice from './component/data/Language';
import projectSlice from './component/data/Project';
import  skillSlice  from './component/data/Skill'
const store = configureStore({
  reducer:{
    personalInfo:personalSlice,
    about:aboutSlice,
    work:workSlice,
    education:educationSlice,
    language:languageSlice,
    pro:projectSlice,
    skill:skillSlice,
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
