import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* provider wrapper for redux store to all components as central store*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
