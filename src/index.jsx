/* @jsx h */
import { h, render, Fragment } from "preact";
import {store, actions} from "./store";

let Counter = ({ state }) => {
  return (
    <Fragment>
      <h1>Counter : {state.count}</h1>
      <button onclick = {actions.inc}>INC</button>
    </Fragment>
  );
};

let App = () => (
  <Fragment>
    <Counter state = {store.getState()} />
  </Fragment>
);

function main() {
  const renderApp = () => render(<App />, root);
  store.subscribe(renderApp);
  setTimeout(actions.inc, 0);
}

main();
