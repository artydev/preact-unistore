import createStore from "unistore";

let store = createStore({
  started: false,
  count: -1
});

const action = store.action

const actions = {
  start: action((s) => (s.started = true)),
  inc: action((s) => (s.count += 1)),
};

export { actions, store };