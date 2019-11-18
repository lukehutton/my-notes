import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import notesReducer from "../reducers/notes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  notesReducer,
  composeEnhancers(applyMiddleware(thunk))
);
