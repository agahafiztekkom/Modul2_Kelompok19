import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList";
import Gambar from "./assets/images/image.jpeg";
import Quotes from "./components/Quotes";

const quotes =
  "With Great Power, Comes Great Responsibility";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList 
    name="Aga" 
    nim="21120118130086" 
    kelompok="19" 
    isNameBold
    image={Gambar} />
    <Quotes author="Uncle Ben" quotes={quotes}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
