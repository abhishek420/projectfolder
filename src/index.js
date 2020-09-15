// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// // import NameForm from './NameForm'
// import { createStore } from 'redux';
// import reducer from './store/reducer';
// import { Provider } from 'react-redux';
// import simpleForm from './SimpleForm';


// // const store = createStore(reducer);
// // console.log(store.getState());
// // store.dispatch({
// //   type: 'INCREMENT'
// // })
// // console.log(store.getState());
// // store.dispatch({
// //   type: 'DECREMENT'
// // })
// // console.log(store.getState());

// ReactDOM.render(
//   // <Provider store={store}>
//   <simpleForm />
//   //</Provider>

//   , document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";
import './App.css';
const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2 className="App">Simple Form</h2>
      <SimpleForm onSubmit={showResults} />

    </div>
  </Provider>,
  rootEl
);
