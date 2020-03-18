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
        <h1>COVID-19</h1>
        <h2> Confirmed Cases, Deaths, and Recoveries by Country</h2>
        <Form />
        <CoronaList />
      </div>
    </Provider>
  );
}

export default App;
