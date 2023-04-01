import { combineReducers, compose, createStore } from "redux";
import { idUserReducer } from "../reducer/idUserReducer";

// configure redux devtools
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//combine reducers
const reducers = combineReducers({
  user: idUserReducer,
});

let store = createStore(reducers, composeEnhancers());

export { store };
