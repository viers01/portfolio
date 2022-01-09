import store from "./redux/state";
import App from "./components/app/app";
import ReactDOM from "react-dom";
import React from "react";

const rerender = () => {
  ReactDOM.render(
    <App
      store={store}
      employerDelete={store.employerDelete.bind(store)}
      inputsValue={store._state}
      addData={store.addData.bind(store)}
      handleChange={store.handleChange.bind(store)}
      handleSearchInput = {store.handleSearchInput.bind(store)}
    />,
    document.getElementById("root")
  );
};

rerender(store.giveState());
store.subscribe(rerender);
