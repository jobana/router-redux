import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

import { initialState } from "../initialState.json";
initialState.user = {};
initialState.playing = {};

import App from "./routes/App";
import "./assets/styles/style.scss";

const store = createStore(reducer, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
