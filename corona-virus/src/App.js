import React from "react";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { dataReducer as reducer } from "./reducers/dataReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Form from "./components/Form";
import CoronaList from "./components/Card";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{fontSize: "2.2rem"}}>COVID-19</h1>
        <h2 style={{fontSize: "1.7rem"}}> CONFIRMED CASES  |  TOTAL DEATHS  |  RECOVERED CASES </h2>
        <Form />
        <CoronaList />
      </div>
    </Provider>
  );
}

export default App;
